// نظام مجموعات كامل - Groups Only ✅
// بطل سرقة يا حرامي هتروح النار 😈

import { level1Groups } from './questions-level1Groups.js';
import { level2Groups } from './questions-level2Groups.js';
import { level3Groups } from './questions-level3Groups.js';
import { level4Groups } from './questions-level4Groups.js';
import { level5Groups } from './questions-level5Groups.js';
// Stubs سيتم إضافتهم هنا تلقائياً

// جديد: تحميل مجموعة من مستوى معين
export async function loadGroupQuestions(level, groupName) {
  // Dynamic load - Groups Only System ✅
  window.allLevelsGroups = window.allLevelsGroups || {};
  
  // Auto-register existing imports
  window.allLevelsGroups[1] = level1Groups;
  window.allLevelsGroups[2] = level2Groups;
  window.allLevelsGroups[3] = level3Groups;
  window.allLevelsGroups[4] = level4Groups;
  window.allLevelsGroups[5] = level5Groups;
  
  if (!window.allLevelsGroups?.[level]?.[groupName]) {
    console.warn(`⚠️ No questions for level ${level} group '${groupName}'`);
    console.info(`💡 أضيفي questions-level${level}Groups.js أو املئي المصفوفات`);
    return [];
  }
  
  const questions = window.allLevelsGroups[level][groupName];
  console.log(`✅ Loaded ${questions.length} قس${questions.length > 10 ? 'م' : 'الة'}مة | level ${level} ➤ ${groupName}`);
  return questions;
}


// المجموعات الخمس الافتراضية
export const GROUP_NAMES = ['arabic', 'general', 'computer', 'english', 'educational'];
export const GROUP_TITLES = {
  arabic: 'عربي',
  general: 'معلومات عامة',
  computer: 'حاسب',
  english: 'إنجليزي',
  educational: 'تربوي'
};

// Config التحكم في المجموعات (افتراضي كلها إجبارية)
// Config لكل المستويات 1-25 ✅
export const levelsGroupsConfig = {};
for(let i=1; i<=25; i++) {
  levelsGroupsConfig[i] = {
    groups: {
      arabic: {mandatory: true},
      general: {mandatory: true}, 
      computer: {mandatory: true},
      english: {mandatory: false},      // اختياري
      educational: {mandatory: false}   // اختياري
    }
  };
}
window.levelsGroupsConfig = levelsGroupsConfig;
console.log('✅ Groups Config: كل المستويات 1-25 جاهزة! 🎉');

console.log('🚀 questions.js loaded - All levels ready (local only, level3-test merged)');

