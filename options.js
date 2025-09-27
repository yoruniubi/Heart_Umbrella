// i18n messages
const messages = {
  'zh-CN': {
    appTitle: '治愈小助手 - 设置',
    appName: '治愈小助手',
    appSubtitle: '让网络世界变得更温暖',
    blockWordsTitle: '🛡️ 屏蔽词汇管理',
    blockWordsSubtitle: '管理你不想看到的词汇，让浏览更舒心',
    newWordInputPlaceholder: '输入要屏蔽的词汇...',
    addBtn: '添加',
    blockedWordsCountLabel: '个屏蔽词汇',
    clearAllBtn: '清空全部',
    emptyStateMessage: '还没有添加屏蔽词汇',
    emptyStateHint: '添加一些你不想看到的词汇，让浏览体验更纯净',
    usageStatsTitle: '📊 使用统计',
    usageStatsSubtitle: '查看小助手为你守护的成果',
    totalBlockedLabel: '总计守护',
    totalEncouragementLabel: '鼓励次数',
    daysUsedLabel: '使用天数',
    featureSettingsTitle: '⚙️ 功能设置',
    featureSettingsSubtitle: '个性化你的使用体验',
    languageSettingTitle: '语言设置',
    languageSettingSubtitle: '选择偏好语言',
    langChinese: '中文',
    langEnglish: 'English',
    autoBlockTitle: '自动屏蔽',
    autoBlockSubtitle: '自动检测并屏蔽设定的词汇',
    showStatsTitle: '显示统计',
    showStatsSubtitle: '在弹窗中显示屏蔽统计信息',
    gentleModeTitle: '温柔模式',
    gentleModeSubtitle: '使用更柔和的替换文字',
    resetSettingsBtn: '重置所有设置',
    footerText1: '💝 治愈小助手 v1.0.0 - 用科技传递温暖',
    footerText2: '让每一次浏览都充满正能量 🌈',
    toastEnterWord: '请输入要屏蔽的词汇',
    toastWordTooLong: '词汇长度不能超过50个字符',
    toastWordExists: '这个词汇已经在列表中了',
    toastAddSuccess: '成功添加: {word} ✨',
    toastAddFail: '添加失败，请重试',
    toastRemoveSuccess: '已移除: {word}',
    toastRemoveFail: '移除失败，请重试',
    toastListEmpty: '列表已经是空的了',
    confirmClearAll: '确定要清空所有 {count} 个屏蔽词汇吗？\n\n这个操作无法撤销。',
    toastClearAllSuccess: '已清空所有屏蔽词汇',
    toastClearAllFail: '清空失败，请重试',
    toastSettingUpdateSuccess: '设置已更新: {settingName}',
    toastSettingUpdateFail: '设置更新失败',
    confirmResetAll: '确定要重置所有设置吗？\n\n这将清空所有屏蔽词汇和统计数据，并恢复默认设置。\n\n此操作无法撤销！',
    toastResetAllSuccess: '所有设置已重置 🔄',
    toastResetAllFail: '重置失败，请重试',
    toastLoadDataFail: '加载数据失败，请刷新页面重试',
    popupTitle: '治愈小助手',
    popupTodayProtection: '今日守护',
    popupPositiveEnergy: '正能量',
    popupEncouragementText: '✨ 每一天都是新的开始，你值得所有美好的事物',
    popupGetEncouragementBtn: '获取鼓励',
    popupAddBlockedWordBtn: '添加屏蔽词',
    popupSettingsBtn: '设置',
    popupFooterText: '让世界变得更温暖 🌈',
  },
  en: {
    appTitle: 'Healing Assistant - Settings',
    appName: 'Healing Assistant',
    appSubtitle: 'Make the online world warmer',
    blockWordsTitle: '🛡️ Blocked Words Management',
    blockWordsSubtitle: 'Manage words you don\'t want to see for a more comfortable browsing experience',
    newWordInputPlaceholder: 'Enter words to block...',
    addBtn: 'Add',
    blockedWordsCountLabel: 'blocked words',
    clearAllBtn: 'Clear All',
    emptyStateMessage: 'No blocked words added yet',
    emptyStateHint: 'Add some words you don\'t want to see to make your browsing experience purer',
    usageStatsTitle: '📊 Usage Statistics',
    usageStatsSubtitle: 'View the results of the assistant\'s protection',
    totalBlockedLabel: 'Total Protected',
    totalEncouragementLabel: 'Encouragements',
    daysUsedLabel: 'Days Used',
    featureSettingsTitle: '⚙️ Feature Settings',
    featureSettingsSubtitle: 'Personalize your experience',
    languageSettingTitle: 'Language Settings',
    languageSettingSubtitle: 'Select preferred language',
    langChinese: '中文',
    langEnglish: 'English',
    autoBlockTitle: 'Auto Block',
    autoBlockSubtitle: 'Automatically detect and block set words',
    showStatsTitle: 'Show Statistics',
    showStatsSubtitle: 'Display blocking statistics in the pop-up',
    gentleModeTitle: 'Gentle Mode',
    gentleModeSubtitle: 'Use softer replacement text',
    resetSettingsBtn: 'Reset All Settings',
    footerText1: '💝 Healing Assistant v1.0.0 - Spreading warmth with technology',
    footerText2: 'May every browse be full of positive energy 🌈',
    toastEnterWord: 'Please enter a word to block',
    toastWordTooLong: 'Word length cannot exceed 50 characters',
    toastWordExists: 'This word is already in the list',
    toastAddSuccess: 'Successfully added: {word} ✨',
    toastAddFail: 'Failed to add, please try again',
    toastRemoveSuccess: 'Removed: {word}',
    toastRemoveFail: 'Failed to remove, please try again',
    toastListEmpty: 'The list is already empty',
    confirmClearAll: 'Are you sure you want to clear all {count} blocked words?\n\nThis action cannot be undone.',
    toastClearAllSuccess: 'All blocked words cleared',
    toastClearAllFail: 'Failed to clear, please try again',
    toastSettingUpdateSuccess: 'Setting updated: {settingName}',
    toastSettingUpdateFail: 'Setting update failed',
    confirmResetAll: 'Are you sure you want to reset all settings?\n\nThis will clear all blocked words and statistics, and restore default settings.\n\nThis action cannot be undone!',
    toastResetAllSuccess: 'All settings reset 🔄',
    toastResetAllFail: 'Failed to reset, please try again',
    toastLoadDataFail: 'Failed to load data, please refresh the page to retry',
    popupTitle: 'Healing Assistant',
    popupTodayProtection: 'Today\'s Protection',
    popupPositiveEnergy: 'Positive Energy',
    popupEncouragementText: '✨ Every day is a new beginning, you deserve all good things',
    popupGetEncouragementBtn: 'Get Encouragement',
    popupAddBlockedWordBtn: 'Add Blocked Word',
    popupSettingsBtn: 'Settings',
    popupFooterText: 'Make the world a warmer place 🌈',
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

    for (const prop in interpolation) {
      message = message.replace(new RegExp(`{${prop}}`, 'g'), interpolation[prop]);
    }
    return message;
  }
};

// Function to apply translations
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
    if (element.parentElement.classList.contains('select-items')) {
      // Do NOT translate the options themselves, they should always show their native language name
      // The text content is already set correctly in options.html and should not be re-translated here.
    } else if (element.tagName === 'INPUT' && element.dataset.i18nPlaceholder) {
      element.placeholder = i18n.t(element.dataset.i18nPlaceholder);
    } else {
      element.textContent = i18n.t(element.dataset.i18nKey);
    }
  });
}

class OptionsManager {
  constructor() {
    this.blockedWords = [];
    this.settings = {
      autoBlock: true,
      showStats: true,
      gentleMode: true
    };
    
    this.init();
  }

  async init() {
    await this.loadData();
    this.bindEvents();
    this.renderWordsList();
    this.updateStats();
    this.loadSettings();
  }

  async loadData() {
    try {
      const result = await chrome.storage.local.get([
        'blockedWords', 
        'blockedCount', 
        'encouragementCount', 
        'settings'
      ]);
      
      this.blockedWords = result.blockedWords || [];
      this.blockedCount = result.blockedCount || 0;
      this.encouragementCount = result.encouragementCount || 0;
      this.settings = { ...this.settings, ...result.settings };
      
    } catch (error) {
      console.error('加载数据失败:', error);
      this.showToast('toastLoadDataFail'); // Use i18n key
    }
  }

  bindEvents() {
    // 添加词汇
    document.getElementById('addWordBtn').addEventListener('click', () => {
      this.addWord();
    });

    // 回车添加词汇
    document.getElementById('newWordInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.addWord();
      }
    });

    // 清空全部
    document.getElementById('clearAllBtn').addEventListener('click', () => {
      this.clearAllWords();
    });

    // 设置切换
    document.getElementById('autoBlock').addEventListener('change', (e) => {
      this.updateSetting('autoBlock', e.target.checked);
    });

    document.getElementById('showStats').addEventListener('change', (e) => {
      this.updateSetting('showStats', e.target.checked);
    });

    document.getElementById('gentleMode').addEventListener('change', (e) => {
      this.updateSetting('gentleMode', e.target.checked);
    });

    // 重置设置
    document.getElementById('resetBtn').addEventListener('click', () => {
      this.resetAllSettings();
    });
  }

  async addWord() {
    const input = document.getElementById('newWordInput');
    const word = input.value.trim();

    if (!word) {
      this.showToast('toastEnterWord'); // Use i18n key
      input.focus();
      return;
    }

    if (word.length > 50) {
      this.showToast('toastWordTooLong'); // Use i18n key
      return;
    }

    if (this.blockedWords.includes(word)) {
      this.showToast('toastWordExists'); // Use i18n key
      input.value = '';
      return;
    }

    try {
      this.blockedWords.push(word);
      await chrome.storage.local.set({ blockedWords: this.blockedWords });
      
      input.value = '';
      this.renderWordsList();
      this.showToast('toastAddSuccess', { word: word }); // Use i18n key with interpolation
      
      // 通知content script更新
      this.notifyContentScripts();
      
    } catch (error) {
      console.error('添加词汇失败:', error);
      this.showToast('toastAddFail'); // Use i18n key
    }
  }

  async removeWord(word, element) {
    try {
      const index = this.blockedWords.indexOf(word);
      if (index > -1) {
        this.blockedWords.splice(index, 1);
        await chrome.storage.local.set({ blockedWords: this.blockedWords });
        
        // 添加移除动画
        element.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => {
          this.renderWordsList();
        }, 300);
        
        this.showToast('toastRemoveSuccess', { word: word }); // Use i18n key with interpolation
        this.notifyContentScripts();
      }
    } catch (error) {
      console.error('移除词汇失败:', error);
      this.showToast('toastRemoveFail'); // Use i18n key
    }
  }

  async clearAllWords() {
    if (this.blockedWords.length === 0) {
      this.showToast('toastListEmpty'); // Use i18n key
      return;
    }

    const confirmed = confirm(i18n.t('confirmClearAll', { count: this.blockedWords.length }));
    if (!confirmed) return;

    try {
      this.blockedWords = [];
      await chrome.storage.local.set({ blockedWords: this.blockedWords });
      this.renderWordsList();
      this.showToast('toastClearAllSuccess'); // Use i18n key
      this.notifyContentScripts();
    } catch (error) {
      console.error('清空失败:', error);
      this.showToast('toastClearAllFail'); // Use i18n key
    }
  }

  renderWordsList() {
    const container = document.getElementById('wordsList');
    const countElement = document.getElementById('wordCount');
    const emptyState = document.getElementById('emptyState');

    countElement.textContent = this.blockedWords.length;

    if (this.blockedWords.length === 0) {
      container.innerHTML = ''; // Clear existing content
      const emptyStateDiv = document.createElement('div');
      emptyStateDiv.className = 'empty-state';
      emptyStateDiv.id = 'emptyState';

      const emptyIconDiv = document.createElement('div');
      emptyIconDiv.className = 'empty-icon';
      emptyIconDiv.textContent = '🌸';
      emptyStateDiv.appendChild(emptyIconDiv);

      const messageP = document.createElement('p');
      messageP.dataset.i18nKey = 'emptyStateMessage';
      messageP.textContent = i18n.t('emptyStateMessage');
      emptyStateDiv.appendChild(messageP);

      const hintP = document.createElement('p');
      hintP.className = 'empty-hint';
      hintP.dataset.i18nKey = 'emptyStateHint';
      hintP.textContent = i18n.t('emptyStateHint');
      emptyStateDiv.appendChild(hintP);

      container.appendChild(emptyStateDiv);
      return;
    }

    container.innerHTML = ''; // Clear existing content

    this.blockedWords.forEach(word => {
      const wordItemDiv = document.createElement('div');
      wordItemDiv.className = 'word-item';
      wordItemDiv.dataset.word = this.escapeHtml(word);

      const wordTextSpan = document.createElement('span');
      wordTextSpan.className = 'word-text';
      wordTextSpan.textContent = this.escapeHtml(word);
      wordItemDiv.appendChild(wordTextSpan);

      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-btn';
      removeBtn.dataset.word = this.escapeHtml(word);
      removeBtn.addEventListener('click', (e) => {
        const clickedWord = e.target.closest('.remove-btn').dataset.word;
        const element = e.target.closest('.word-item');
        this.removeWord(clickedWord, element);
      });

      const btnIconSpan = document.createElement('span');
      btnIconSpan.className = 'btn-icon';
      btnIconSpan.textContent = '×';
      removeBtn.appendChild(btnIconSpan);

      wordItemDiv.appendChild(removeBtn);
      container.appendChild(wordItemDiv);
    });
  }

  updateStats() {
    document.getElementById('totalBlocked').textContent = this.blockedCount;
    document.getElementById('totalEncouragement').textContent = this.encouragementCount;
    
    // 计算使用天数（简单实现）
    const installDate = localStorage.getItem('healingAssistantInstallDate');
    if (!installDate) {
      localStorage.setItem('healingAssistantInstallDate', Date.now());
      document.getElementById('daysUsed').textContent = '1';
    } else {
      const days = Math.floor((Date.now() - parseInt(installDate)) / (1000 * 60 * 60 * 24)) + 1;
      document.getElementById('daysUsed').textContent = days;
    }
  }

  loadSettings() {
    document.getElementById('autoBlock').checked = this.settings.autoBlock;
    document.getElementById('showStats').checked = this.settings.showStats;
    document.getElementById('gentleMode').checked = this.settings.gentleMode;
  }

  async updateSetting(key, value) {
    this.settings[key] = value;
    try {
      await chrome.storage.local.set({ settings: this.settings });
      this.showToast('toastSettingUpdateSuccess', { settingName: this.getSettingName(key) }); // Use i18n key
      this.notifyContentScripts();
    } catch (error) {
      console.error('更新设置失败:', error);
      this.showToast('toastSettingUpdateFail'); // Use i18n key
    }
  }

  getSettingName(key) {
    const names = {
      autoBlock: 'autoBlockTitle',
      showStats: 'showStatsTitle',
      gentleMode: 'gentleModeTitle'
    };
    return i18n.t(names[key] || key); // Translate setting name
  }

  async resetAllSettings() {
    const confirmed = confirm(i18n.t('confirmResetAll'));
    if (!confirmed) return;

    try {
      await chrome.storage.local.clear();
      
      this.blockedWords = [];
      this.settings = {
        autoBlock: true,
        showStats: true,
        gentleMode: true
      };
      this.blockedCount = 0;
      this.encouragementCount = 0;

      this.renderWordsList();
      this.loadSettings();
      this.updateStats();
      
      localStorage.removeItem('healingAssistantInstallDate');
      
      this.showToast('toastResetAllSuccess'); // Use i18n key
      this.notifyContentScripts();

    } catch (error) {
      console.error('重置失败:', error);
      this.showToast('toastResetAllFail'); // Use i18n key
    }
  }

  async notifyContentScripts() {
    try {
      const tabs = await chrome.tabs.query({});
      for (const tab of tabs) {
        try {
          await chrome.tabs.sendMessage(tab.id, {
            action: 'updateBlockedWords',
            words: this.blockedWords,
            settings: this.settings
          });
        } catch (error) {
          // 忽略无法连接的标签页
        }
      }
    } catch (error) {
      console.error('通知content scripts失败:', error);
    }
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  showToast(messageKey, interpolation = {}) {
    const message = i18n.t(messageKey, interpolation); // Translate the message
    
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
      existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    if (document.body) { // Add check for document.body
      document.body.appendChild(toast);
    } else {
      console.error('Document body not found when trying to show toast.');
      return;
    }

    setTimeout(() => {
      if (document.body && document.body.contains(toast)) { // Add check for document.body
        document.body.removeChild(toast);
      }
    }, 3000);
  }
}

const style = document.createElement('style');
style.textContent = `
  @keyframes slideOut {
    to {
      opacity: 0;
      transform: translateX(-100%);
      margin-bottom: -60px;
    }
  }
`;
if (document.head) { // Add check for document.head
  document.head.appendChild(style);
} else {
  console.error('Document head not found when trying to inject CSS.');
}

document.addEventListener('DOMContentLoaded', () => {
  const customSelect = document.getElementById('languageSelect');
  const selectSelected = customSelect.querySelector('.select-selected');
  const selectItems = customSelect.querySelector('.select-items');
  const selectOptions = selectItems.querySelectorAll('div');

  // Load saved language preference
  chrome.storage.local.get('language', (data) => {
    let savedLanguage = data.language || 'zh-CN'; 
    i18n.locale = savedLanguage;

    // Update the displayed selected value
    const selectedOptionElement = Array.from(selectOptions).find(
      (option) => option.dataset.value === savedLanguage
    );
    if (selectedOptionElement) {
      // Set the selected display text to the native language name from the option element
      selectSelected.textContent = selectedOptionElement.textContent;
    }

    applyTranslations(); // Apply translations after loading preference

    // Initialize OptionsManager after translations are applied
    new OptionsManager();
  });

  // Toggle dropdown visibility
  selectSelected.addEventListener('click', function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    selectItems.classList.toggle('select-hide');
    this.classList.toggle('select-arrow-active');
  });

  // Handle option selection
  selectOptions.forEach((option) => {
    option.addEventListener('click', function () {
      const selectedValue = this.dataset.value;
      const selectedText = this.textContent;

      selectSelected.textContent = selectedText;
      i18n.locale = selectedValue;
      chrome.storage.local.set({ language: selectedValue });

      // Remove 'same-as-selected' from all options and add to the newly selected one
      selectOptions.forEach(item => item.classList.remove('same-as-selected'));
      this.classList.add('same-as-selected');

      selectSelected.click(); // Close the dropdown
    });
  });

  // Close dropdowns when clicking outside
  function closeAllSelect(elmnt) {
    const arrNo = [];
    const x = document.getElementsByClassName('select-items');
    const y = document.getElementsByClassName('select-selected');
    for (let i = 0; i < y.length; i++) {
      if (elmnt === y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove('select-arrow-active');
      }
    }
    for (let i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add('select-hide');
      }
    }
  }

  document.addEventListener('click', closeAllSelect);
});
