// 治愈小助手后台脚本
class HealingBackground {
  constructor() {
    this.init();
  }

  init() {
    // 监听插件安装/启动
    chrome.runtime.onInstalled.addListener((details) => {
      this.handleInstall(details);
    });

    // 监听来自content script的消息
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      this.handleMessage(message, sender, sendResponse);
      return true; // 异步响应
    });

    // 定期清理统计数据（每天重置当日统计）
    this.setupDailyReset();
  }

  async handleInstall(details) {
    try {
      // 设置默认配置
      const defaultSettings = {
        autoBlock: true,
        showStats: true,
        gentleMode: true
      };

      const defaultData = {
        blockedWords: [],
        blockedCount: 0,
        encouragementCount: 0,
        settings: defaultSettings,
        installDate: Date.now(),
        lastResetDate: this.getTodayDateString()
      };

      // 检查是否是首次安装
      const existingData = await chrome.storage.local.get(['installDate']);
      
      if (details.reason === 'install' || !existingData.installDate) {
        await chrome.storage.local.set(defaultData);
        console.log('治愈小助手安装完成，默认设置已应用');
        
        // 可选：显示欢迎页面
        // chrome.tabs.create({ url: chrome.runtime.getURL('welcome.html') });
      } else if (details.reason === 'update') {
        // 更新时保持现有数据，但确保有新的设置项
        const currentData = await chrome.storage.local.get(null);
        const mergedSettings = { ...defaultSettings, ...currentData.settings };
        await chrome.storage.local.set({ settings: mergedSettings });
        console.log('治愈小助手更新完成');
      }
    } catch (error) {
      console.error('处理安装事件失败:', error);
    }
  }

  async handleMessage(message, sender, sendResponse) {
    try {
      switch (message.action) {
        case 'updateBlockedCount':
          await this.updateBlockedCount(message.count);
          sendResponse({ success: true });
          break;
          
        case 'getEncouragement':
          const encouragement = await this.getRandomEncouragement();
          sendResponse({ encouragement });
          break;
          
        case 'incrementEncouragementCount':
          await this.incrementEncouragementCount();
          sendResponse({ success: true });
          break;
          
        default:
          sendResponse({ error: '未知的消息类型' });
      }
    } catch (error) {
      console.error('处理消息失败:', error);
      sendResponse({ error: error.message });
    }
  }

  async updateBlockedCount(count) {
    try {
      const result = await chrome.storage.local.get(['blockedCount']);
      const newCount = (result.blockedCount || 0) + count;
      await chrome.storage.local.set({ blockedCount: newCount });
    } catch (error) {
      console.error('更新屏蔽计数失败:', error);
    }
  }

  async incrementEncouragementCount() {
    try {
      const result = await chrome.storage.local.get(['encouragementCount']);
      const newCount = (result.encouragementCount || 0) + 1;
      await chrome.storage.local.set({ encouragementCount: newCount });
    } catch (error) {
      console.error('更新鼓励计数失败:', error);
    }
  }

  async getRandomEncouragement() {
    const encouragements = [
      "✨ 每一天都是新的开始，你值得所有美好的事物",
      "🌟 你比你想象的更勇敢、更强大、更美丽",
      "🌈 困难只是成长路上的垫脚石，你一定能跨越",
      "💝 你的存在本身就是一份珍贵的礼物",
      "🦋 就像蝴蝶需要时间破茧而出，你的蜕变也需要耐心",
      "🌸 每个人都有属于自己的花期，慢慢来，不要急",
      "☀️ 阳光总在风雨后，你的好运正在路上",
      "💪 你已经走了这么远，证明你有能力继续前行"
    ];
    
    const randomIndex = Math.floor(Math.random() * encouragements.length);
    return encouragements[randomIndex];
  }

  setupDailyReset() {
    // 每小时检查一次是否需要重置当日统计
    setInterval(async () => {
      try {
        const today = this.getTodayDateString();
        const result = await chrome.storage.local.get(['lastResetDate', 'blockedCount']);
        
        if (result.lastResetDate !== today) {
          // 新的一天，重置当日统计
          await chrome.storage.local.set({
            blockedCount: 0,
            lastResetDate: today
          });
          console.log('每日统计已重置');
        }
      } catch (error) {
        console.error('每日重置失败:', error);
      }
    }, 1000 * 60 * 60); // 每小时检查一次
  }

  getTodayDateString() {
    return new Date().toISOString().split('T')[0];
  }
}

// 初始化后台脚本
new HealingBackground();

// 保持service worker活跃
chrome.runtime.onConnect.addListener((port) => {
  if (port.name === 'keepAlive') {
    port.onDisconnect.addListener(() => {
      console.log('Content script disconnected');
    });
  }
});

// 处理标签页更新
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    // 可以在这里添加特定网站的处理逻辑
    console.log(`页面加载完成: ${tab.url}`);
  }
});

// 监听存储变化
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local') {
    console.log('存储数据发生变化:', changes);
    
    // 如果屏蔽词列表发生变化，可以在这里添加额外的处理逻辑
    if (changes.blockedWords) {
      console.log('屏蔽词列表已更新');
    }
  }
});

// 错误处理
self.addEventListener('error', (event) => {
  console.error('后台脚本错误:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('未处理的Promise错误:', event.reason);
});