class WordBlocker {
  constructor() {
    this.blockedWords = [];
    this.replacementMessages = [
      "💝 这里有一些温暖的话语被隐藏了",
      "🌈 这个位置被美好的祝福占据",
      "✨ 负能量已被转化为正能量",
      "🌸 这里原本有些不开心的内容",
      "💕 用爱心替换了一些词汇",
      "🌟 这里的内容被温柔守护着",
      "🦋 不美好的词语已经飞走了",
      "☀️ 阳光驱散了这里的阴霾"
    ];
    
    this.blockedCount = 0;
    this.observer = null;
    this.processedElements = new WeakSet();
    
    this.init();
  }

  async init() {
    await this.loadBlockedWords();
    await this.loadBlockedCount();
    this.startContentBlocking();
    this.listenForMessages();
  }

  async loadBlockedWords() {
    try {
      const result = await chrome.storage.local.get(['blockedWords']);
      this.blockedWords = result.blockedWords || [];
      console.log('加载的屏蔽词列表:', this.blockedWords);
    } catch (error) {
      console.error('加载屏蔽词失败:', error);
    }
  }

  async loadBlockedCount() {
    try {
      const result = await chrome.storage.local.get(['blockedCount']);
      this.blockedCount = result.blockedCount || 0;
    } catch (error) {
      console.error('加载屏蔽计数失败:', error);
    }
  }

  async saveBlockedCount() {
    try {
      await chrome.storage.local.set({ blockedCount: this.blockedCount });
    } catch (error) {
      console.error('保存屏蔽计数失败:', error);
    }
  }

  listenForMessages() {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action === 'updateBlockedWords') {
        this.blockedWords = message.words;
        this.processAllText();
        sendResponse({ success: true });
      }
    });
  }

  startContentBlocking() {
    // 立即处理现有内容
    this.processAllText();
    
    // 监听DOM变化
    this.observer = new MutationObserver((mutations) => {
      let hasTextChanges = false;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || 
                (node.nodeType === Node.ELEMENT_NODE && !this.processedElements.has(node))) {
              hasTextChanges = true;
            }
          });
        } else if (mutation.type === 'characterData') {
          hasTextChanges = true;
        }
      });
      
      if (hasTextChanges) {
        // 使用防抖避免过度处理
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
          this.processAllText();
        }, 100);
      }
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  processAllText() {
    if (this.blockedWords.length === 0) return;
    
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          // 跳过脚本、样式和已处理的元素
          const parent = node.parentElement;
          if (!parent || 
              ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName) ||
              parent.isContentEditable ||
              this.processedElements.has(parent)) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }

    textNodes.forEach(textNode => this.processTextNode(textNode));
  }

  processTextNode(textNode) {
    if (!textNode.textContent.trim()) return;
    
    let content = textNode.textContent;
    let hasChanges = false;
    let changeCount = 0;

    this.blockedWords.forEach(word => {
      if (!word.trim()) return;
      
      const regex = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      const matches = content.match(regex);
      
      if (matches) {
        const replacement = this.getRandomReplacement();
        content = content.replace(regex, replacement);
        hasChanges = true;
        changeCount += matches.length;
      }
    });

    if (hasChanges) {
      // 创建替换元素
      const replacementElement = document.createElement('span');
      replacementElement.className = 'healing-blocked-content';
      replacementElement.textContent = content;
      
      // 添加样式和动画
      this.addBlockedStyles(replacementElement);
      
      // 替换文本节点
      textNode.parentNode.replaceChild(replacementElement, textNode);
      
      // 标记为已处理
      this.processedElements.add(replacementElement);
      
      // 更新统计
      this.blockedCount += changeCount;
      this.saveBlockedCount();
      
      console.log(`屏蔽了 ${changeCount} 个词汇`);
    }
  }

  addBlockedStyles(element) {
    element.style.cssText = `
      background: linear-gradient(135deg, #ffecd2, #fcb69f) !important;
      color: #666 !important;
      padding: 2px 6px !important;
      border-radius: 12px !important;
      font-size: 0.9em !important;
      margin: 0 2px !important;
      display: inline-block !important;
      animation: gentlePulse 2s infinite !important;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1) !important;
      border: 1px solid rgba(255,255,255,0.3) !important;
      backdrop-filter: blur(5px) !important;
      font-weight: 500 !important;
      transition: all 0.3s ease !important;
    `;
    
    // 添加悬停效果
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'scale(1.05)';
      element.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)';
      element.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    });
  }

  getRandomReplacement() {
    const randomIndex = Math.floor(Math.random() * this.replacementMessages.length);
    return this.replacementMessages[randomIndex];
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    clearTimeout(this.debounceTimer);
  }
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
  @keyframes gentlePulse {
    0%, 100% { 
      opacity: 0.8; 
      transform: scale(1);
    }
    50% { 
      opacity: 1; 
      transform: scale(1.02);
    }
  }
  
  .healing-blocked-content {
    cursor: help;
  }
  
  .healing-blocked-content:hover::after {
    content: "这个内容被温柔地守护着 💕";
    position: absolute;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 10000;
    margin-top: 25px;
    margin-left: -50px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

// 初始化词汇屏蔽器
const wordBlocker = new WordBlocker();

// 页面卸载时清理
window.addEventListener('beforeunload', () => {
  wordBlocker.destroy();
});