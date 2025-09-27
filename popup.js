// internationalization messages
const messages = {
  'zh-CN': {
    appName:'心伞 - 治愈小助手',
    addBtn:'添加',
    popupTitle: '治愈小助手',
    popupTodayProtection: '今日守护',
    popupPositiveEnergy: '正能量',
    popupEncouragementText: '✨ 每一天都是新的开始，你值得所有美好的事物',
    popupGetEncouragementBtn: '获取鼓励',
    popupAddBlockedWordBtn: '添加屏蔽词',
    popupSettingsBtn: '设置',
    popupFooterText: '让世界变得更温暖 🌈',
    popupEncouragementList: [
      "✨ 每一天都是新的开始，你值得所有美好的事物",
      "🌟 你比你想象的更勇敢、更强大、更美丽",
      "🌈 困难只是成长路上的垫脚石，你一定能跨越",
      "💝 你的存在本身就是一份珍贵的礼物",
      "🦋 就像蝴蝶需要时间破茧而出，你的蜕变也需要耐心",
      "🌸 每个人都有属于自己的花期，慢慢来，不要急",
      "☀️ 阳光总在风雨后，你的好运正在路上",
      "💪 你已经走了这么远，证明你有能力继续前行",
      "🎈 放下过去，拥抱现在，期待未来",
      "🌙 即使在最黑暗的夜晚，星星依然闪耀",
      "🌺 你的温柔和善良让这个世界更美好",
      "🍀 相信自己，你拥有改变一切的力量",
      "🎯 每一个小小的进步都值得被庆祝",
      "🌟 你不需要完美，你只需要做自己",
      "💕 爱自己是一生浪漫的开始"
    ],
    toastWordExists: '该词已存在',
    toastAddSuccess: '添加屏蔽词 "{word}" 成功',
    toastEnterWord: '请输入屏蔽词',
    toastWordTooLong: '屏蔽词不能超过50个字符',
    toastAddFail: '添加屏蔽词失败'
  },
  en: {
    appName:'Heart Umbrella - Healing Assistant',
    addBtn:'Add',
    popupTitle: 'Healing Assistant',
    popupTodayProtection: 'Today\'s Protection',
    popupPositiveEnergy: 'Positive Energy',
    popupEncouragementText: '✨ Every day is a new beginning, you deserve all good things',
    popupGetEncouragementBtn: 'Get Encouragement',
    popupAddBlockedWordBtn: 'Add Blocked Word',
    popupSettingsBtn: 'Settings',
    popupFooterText: 'Make the world a warmer place 🌈',
    popupEncouragementList: [
      "✨ Every day is a new beginning, you deserve all good things",
      "🌟 You are braver, stronger, and more beautiful than you think",
      "🌈 Difficulties are just stepping stones on the path to growth, you can overcome them",
      "💝 Your existence itself is a precious gift",
      "🦋 Just as a butterfly needs time to emerge from its cocoon, your transformation also requires patience",
      "🌸 Everyone has their own blooming season, take your time, don't rush",
      "☀️ The sun always shines after the storm, your good luck is on its way",
      "💪 You've come this far, proving you have the ability to keep going",
      "🎈 Let go of the past, embrace the present, and look forward to the future",
      "🌙 Even on the darkest nights, the stars still shine",
      "🌺 Your gentleness and kindness make this world a better place",
      "🍀 Believe in yourself, you have the power to change everything",
      "🎯 Every small step forward is worth celebrating",
      "🌟 You don't need to be perfect, you just need to be yourself",
      "💕 Loving yourself is the beginning of a lifelong romance"
    ],
    toastWordExists: 'Word already exists',
    toastAddSuccess: 'Blocked word "{word}" added successfully',
    toastEnterWord: 'Please enter a word to block',
    toastWordTooLong: 'Blocked word cannot exceed 50 characters',
    toastAddFail: 'Failed to add blocked word'
  },
};

// Custom i18n implementation
const i18n = {
  _locale: 'zh-CN', // default locale
  get locale() {
    return this._locale;
  },
  set locale(value) {
    this._locale = value;
    applyTranslations(); // Re-apply translations when locale changes
  },
  t(key, interpolation = {}) {
    let message = messages[this._locale][key] || messages['en'][key] || key; // Fallback to English or key itself

    if (Array.isArray(message)) {
      return message[Math.floor(Math.random() * message.length)];
    }

    for (const prop in interpolation) {
      message = message.replace(new RegExp(`{${prop}}`, 'g'), interpolation[prop]);
    }
    return message;
  }
};

function applyTranslations() {
  const currentLocale = i18n.locale;
  document.documentElement.lang = currentLocale; // Update html lang attribute

  // Translate title
  const titleElement = document.querySelector('title[data-i18n-key]');
  if (titleElement) {
    titleElement.textContent = i18n.t(titleElement.dataset.i18nKey);
  }

  // Translate elements with data-i18n-key
  document.querySelectorAll('[data-i18n-key]').forEach(element => {
    const key = element.dataset.i18nKey;
    if (!key) return;

    if (element.tagName === 'INPUT' && element.dataset.i18nPlaceholder) {
      element.placeholder = i18n.t(element.dataset.i18nPlaceholder);
    } else {
      const textElement = element.querySelector('.btn-text');
      if (textElement) {
        textElement.textContent = i18n.t(key);
      } else {
        element.textContent = i18n.t(key);
      }
    }
  });
}
// ====================================================
// END: MAJOR FIX
// ====================================================


class HealingAssistant {
  constructor() {
    this.init();
  }

  async init() {
    await this.loadStats();
    this.bindEvents();
    
    chrome.storage.local.get('language', (data) => {
      let savedLanguage = data.language || 'zh-CN';
      i18n.locale = savedLanguage;
      applyTranslations();
      // Ensure the initial encouragement doesn't rely on the old i18n logic
      document.getElementById('encouragementText').textContent = i18n.t('popupEncouragementList');
    });
  }

  async loadStats() {
    try {
      const result = await chrome.storage.local.get(['blockedCount', 'encouragementCount']);
      document.getElementById('blockedCount').textContent = result.blockedCount || 0;
      document.getElementById('encouragementCount').textContent = result.encouragementCount || 0;
    } catch (error) {
      console.error('加载统计数据失败:', error);
    }
  }

  bindEvents() {
    document.getElementById('encourageBtn').addEventListener('click', () => {
      this.showRandomEncouragement();
      this.incrementEncouragementCount();
    });

    document.getElementById('addWordBtn').addEventListener('click', () => {
      this.toggleAddWordSection();
    });

    document.getElementById('confirmAddBtn').addEventListener('click', () => {
      this.addBlockedWord();
    });

    document.getElementById('wordInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.addBlockedWord();
      }
    });

    document.getElementById('settingsBtn').addEventListener('click', () => {
      chrome.runtime.openOptionsPage();
    });
  }

  showRandomEncouragement() {
    const card = document.getElementById('encouragementCard');
    const text = document.getElementById('encouragementText');
    const btn = document.getElementById('encourageBtn');
    const btnText = btn.querySelector('.btn-text');
    const btnIcon = btn.querySelector('.btn-icon');
    
    if (btn.disabled) return; // Prevent multiple clicks

    // Add loading state by hiding text and showing a spinner
    btn.disabled = true;
    btnText.style.display = 'none';
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    btn.appendChild(loadingDiv);
    
    card.classList.add('shimmer');
    
    setTimeout(() => {
      text.textContent = i18n.t('popupEncouragementList');
      
      // Restore the button state
      btnText.textContent = i18n.t('popupGetEncouragementBtn');
      btnText.style.display = ''; // Restore visibility
      btn.removeChild(loadingDiv); // Remove spinner
      btn.disabled = false;
      
      card.classList.remove('shimmer');
    }, 1000);
  }

  async incrementEncouragementCount() {
    try {
      const result = await chrome.storage.local.get(['encouragementCount']);
      const newCount = (result.encouragementCount || 0) + 1;
      await chrome.storage.local.set({ encouragementCount: newCount });
      document.getElementById('encouragementCount').textContent = newCount;
    } catch (error) {
      console.error('更新鼓励计数失败:', error);
    }
  }

  toggleAddWordSection() {
    const section = document.getElementById('addWordSection');
    const input = document.getElementById('wordInput');
    
    if (section.style.display === 'none' || !section.style.display) {
      section.style.display = 'block';
      input.focus();
    } else {
      section.style.display = 'none';
      input.value = '';
    }
  }

  async addBlockedWord() {
    const input = document.getElementById('wordInput');
    const word = input.value.trim();
    
    if (!word) {
      // Since toast depends on options.js, we use a simple alert here for now.
      alert(i18n.t('toastEnterWord', {}));
      return;
    }

    if (word.length > 50) {
      alert(i18n.t('toastWordTooLong', {}));
      return;
    }

    try {
      const result = await chrome.storage.local.get(['blockedWords']);
      const blockedWords = result.blockedWords || [];
      
      if (blockedWords.includes(word)) {
        alert(i18n.t('toastWordExists', {}));
        return;
      }
      
      blockedWords.push(word);
      await chrome.storage.local.set({ blockedWords });
      
      input.value = '';
      this.toggleAddWordSection();
      alert(i18n.t('toastAddSuccess', { word: word }));
      
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0] && tabs[0].id) {
          chrome.tabs.sendMessage(tabs[0].id, { 
            action: 'updateBlockedWords', 
            words: blockedWords 
          });
        }
      });
    } catch (error) {
      console.error('添加屏蔽词失败:', error);
      alert(i18n.t('toastAddFail', {}));
    }
  }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
  new HealingAssistant();
});
