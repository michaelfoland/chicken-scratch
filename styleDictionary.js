// Create style map and load provided styles
const styleDictionary = new Map();
styleDictionary.set('chickenScratch',chickenScratch);
styleDictionary.set('chickenScratchSmall',chickenScratchSmall);
styleDictionary.set('chickenScratchGreen',chickenScratchGreen);
styleDictionary.set('constructionPaper',constructionPaper);

registerStyle('chicken-scratch-small',chickenScratchSmall);
registerStyle('chicken-scratch-green',chickenScratchGreen);
registerStyle('chicken-scratch-fat',chickenScratchFat);
registerStyle('chicken-scratch-thin',chickenScratchThin);
registerStyle('chicken-scratch-shadow',chickenScratchShadow);
registerStyle('chicken-scratch-high-translation',chickenScratchHighTranslation);
registerStyle('chicken-scratch-low-translation',chickenScratchLowTranslation);
registerStyle('chicken-scratch-high-rotation',chickenScratchHighRotation);
registerStyle('chicken-scratch-low-rotation',chickenScratchLowRotation);
registerStyle('chicken-scratch-expanded',chickenScratchExpanded);
registerStyle('chicken-scratch-condensed',chickenScratchCondensed);
registerStyle('chicken-scratch-round',chickenScratchRound);
registerStyle('chicken-scratch-straight',chickenScratchStraight);

// THIS SHOULD BE PUBLIC
function registerStyle(name, style) {
  if (name == 'chicken-scratch' || name == 'chickenScratch' ) return; // bail if user provides bad name
  
  // fill out any missing parts of style
  completeStyle(name, style);
  
  // When done, register style
  styleDictionary.set(style.camelName, style);
}


