// English Text Direction Fix for Mixed RTL/LTR Quiz
// Auto-detects English/Latin text and wraps for proper LTR display

/**
 * Detects English/Latin sequences ≥3 chars and wraps with LTR span
 * @param {string} text - Input text (Arabic + English mix)
 * @returns {string} HTML with English parts wrapped
 */
export function fixEnglishDirection(text) {
  if (!text || typeof text !== 'string') return text || '';
  
  // Regex: 3+ Latin chars (a-zA-Z), optional apostrophes/hyphens, word boundaries
  const englishRegex = /\\b[a-zA-Z][a-zA-Z\\'\\-]{2,}\\b/gi;
  
  return text.replace(englishRegex, match => 
    `<span class="english-text" dir="ltr" lang="en">${match}</span>`
  );
}

/**
 * Full question fix (question + options)
 * @param {Object} question - {question, options, answer, explanation}
 * @returns {Object} Fixed question with HTML-safe strings
 */
export function fixQuestion(question) {
  if (!question) return question;
  
  const fixed = { ...question };
  
  fixed.question = fixEnglishDirection(fixed.question || '');
  fixed.options = (fixed.options || []).map(opt => fixEnglishDirection(opt));
  if (fixed.explanation) fixed.explanation = fixEnglishDirection(fixed.explanation);
  if (fixed.answer && typeof fixed.answer === 'string') {
    fixed.answer = fixEnglishDirection(fixed.answer);
  }
  
  return fixed;
}

/**
 * Enhance display - call before innerHTML
 * @param {string} htmlContent 
 */
export function enhanceDisplay(htmlContent) {
  return fixEnglishDirection(htmlContent);
}

// Usage in renderQuestion():
// questionTextEl.innerHTML = `<strong>${fixEnglishDirection(normQ.question)}</strong>`;

// ✅ Export default for easy import
export default { fixEnglishDirection, fixQuestion, enhanceDisplay };
