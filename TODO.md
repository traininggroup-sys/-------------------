# ✅ FIXED: Level 15 - Simple Questions Only

## Changes Applied:
1. **index.html**: Fixed `getTotalQuestionsForLevel` → dynamic groups (shows correct total).
2. **Created** `questions-level15-simple.js`: 3 simple questions only (`level15Groups = {simple: [...]}`).
3. **questions.js**: 
   - Import: `questions-level15-simple.js`
   - GROUP_TITLES: `simple: 'أسئلة بسيطة'`
   - Config: L15 uses `{simple: {mandatory: true}}`

**Result:** 
- Level 15 modal: "3 سؤال"
- Groups screen: Single "أسئلة بسيطة" card
- No behavioral/jدرات content → Clean & simple as requested.

**Test:** Open `index.html` → Login → Level 15 → Single simple group with 3 questions! 🎉

