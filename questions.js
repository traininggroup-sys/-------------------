// بطل سرقة يا حرامي هتروح النار

import { level1Questions } from './questions-level1.js';
import { level2Questions } from './questions-level2.js';
import { level3Questions } from './questions-level3.js';
import { level4Questions } from './questions-level4.js';
import { level5Questions } from './questions-level5.js';
import { level6Questions } from './questions-level6.js';
import { level7Questions } from './questions-level7.js';
import { level8Questions } from './questions-level8.js';
import { level9Questions } from './questions-level9.js';
import { level10Questions } from './questions-level10.js';
import { level11Questions } from './questions-level11.js';
import { level12Questions } from './questions-level12.js';
import { level13Questions } from './questions-level13.js';
import { level14Questions } from './questions-level14.js';
import { level15Questions } from './questions-level15.js';
import { level16Questions } from './questions-level16.js';
import { level17Questions } from './questions-level17.js';
import { level18Questions } from './questions-level18.js';
import { level19Questions } from './questions-level19.js';
import { level20Questions } from './questions-level20.js';
import { level21Questions } from './questions-level21.js';
import { level22Questions } from './questions-level22.js';
import { level23Questions } from './questions-level23.js';
import { level24Questions } from './questions-level24.js';
import { level25Questions } from './questions-level25.js';
import { level1Groups } from './questions-level1Groups.js';



export const allLevelsQuestions = {
  1: level1Questions,
  2: level2Questions,
  3: level3Questions,
  4: level4Questions,
  5: level5Questions,
  6: level6Questions,
  7: level7Questions,
  8: level8Questions,
  9: level9Questions,
  10: level10Questions,
  11: level11Questions,
  12: level12Questions,
  13: level13Questions,
  14: level14Questions,
  15: level15Questions,
  16: level16Questions,
  17: level17Questions,
  18: level18Questions,
  19: level19Questions,
  20: level20Questions,
  21: level21Questions,
  22: level22Questions,
  23: level23Questions,
  24: level24Questions,
  25: level25Questions


};

// دالة التحميل القديمة للتوافق (backward compatible)
export async function loadQuestions(level) {
  const questions = allLevelsQuestions[level] || [];
  console.log(`✅ Loaded ${questions.length} questions from questions-level${level}.js (legacy)`);
  if (questions.length === 0) {
    console.warn(`⚠️ questions-level${level}.js empty`);
  }
  return questions;
}

// جديد: تحميل مجموعة من مستوى معين
export async function loadGroupQuestions(level, groupName) {
window.allLevelsGroups = window.allLevelsGroups || {};
window.allLevelsGroups[1] = level1Groups;
  // level1Groups = {arabic: [...], general: [...], etc.}
  if (!window.allLevelsGroups?.[level]?.[groupName]) {
    console.warn(`⚠️ No questions for level ${level} group '${groupName}' - أضيفي level${level}Groups.js`);
    return [];
  }
  const questions = window.allLevelsGroups[level][groupName];
  console.log(`✅ Loaded ${questions.length} questions for level ${level} group '${groupName}'`);
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
export const levelsGroupsConfig = {
  1: {groups: GROUP_NAMES.reduce((acc, g) => ({...acc, [g]: {mandatory: true}}), {})},
  2: {groups: GROUP_NAMES.reduce((acc, g) => ({...acc, [g]: {mandatory: true}}), {})},
  // Examples - edit false for optional
  // 3: {groups: GROUP_NAMES.reduce((acc, g) => ({...acc, [g]: {mandatory: g !== 'english' ? true : false}}), {})}
};
window.levelsGroupsConfig = levelsGroupsConfig; // Global access
// Add more levels...
console.log('Config loaded:', levelsGroupsConfig[1]);

console.log('🚀 questions.js loaded - All levels ready (local only, level3-test merged)');

