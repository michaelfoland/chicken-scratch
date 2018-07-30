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

function completeStyle(name, style) {
  // Get default style
  let defaultStyle = styleDictionary.get('chickenScratch');

  // Go through each key in the default style
  // and validate it on the test style
  for (let key in defaultStyle) {
    
    // if property is invalid (i.e., not set or
    // set to an inappropriate value)
    if (!propertyIsValid(style, key)) {
      
      // ...set it to the value of the default style
      style[key] = defaultStyle[key];
    }
  }
  
  style['name'] = name;
  style['camelName'] = kebabToCamel(name);
}

function propertyIsValid(style, propName) {
  if (!style.hasOwnProperty(propName)) return false;

  switch(propName) {
    case 'strokeWidth':
      if (typeof style[propName] === 'number' && style[propName] >= 2) return true;
      break;
    case 'size':
      if (typeof style[propName] === 'number' && style[propName] >= 1) return true;
      break;
    case 'lineHeight':
    case 'maxRotation':
    case 'maxTranslation':
    case 'shadowBlur':
      if (typeof style[propName] === 'number' && style[propName] >= 0) return true;
      break;
    case 'letterSpacing':
      if (typeof style[propName] === 'number' && style[propName] >= -1) return true;
      break;
    case 'lineCap':
      if (typeof style[propName] === 'string' && style[propName] == 'square' || style[propName] == 'round' || style[propName] == 'butt') return true;
      break;
    case 'shadowOffsetX':
    case 'shadowOffsetY':
      if (typeof style[propName] === 'number') return true;
      break;
    case 'color':
    case 'shadowColor':
      if (colorIsValid(style[propName])) return true;
      break;
    case 'shadowVisibility':
      if (typeof style[propName] == 'boolean') return true;
      break;
  }

  return false;
}

// I'm sure there's a better way to implement
// this, probably with Regexp, but this was what came to mind at the time
function kebabToCamel(kebab) {
  // find all hyphens
  let index = 0;
  let hyphenLocations = [];
  
  while(kebab.indexOf('-',index) != '-1') {
    
    hyphenLocations.push(kebab.indexOf('-',index));
    
    index = hyphenLocations[hyphenLocations.length - 1] + 1;
  }
  
  if (hyphenLocations.length == 0) return kebab; // bail if there are no hyphens
  
  // capitalize letters following hyphens
  hyphenLocations.forEach((location, index) => {
    if (location != kebab.length - 1) {
      kebab = kebab.replace(kebab.substr(location,2), '-' + kebab.substr(location + 1, 1).toUpperCase());
    }
  });
  
  // remove all hyphens
  kebab = kebab.replace(/-/g,'');

  return kebab;
}


function colorIsValid(testColor) {
  // Create an element and append it to body
  let colorChecker = document.createElement('div');
  colorChecker.style.position = 'absolute';
  colorChecker.style.opacity = 0;
  document.getElementsByTagName('body')[0].appendChild(colorChecker);
  
  // Set original color and test updated color
  colorChecker.style.color = 'rgb(255,255,255)';
  let originalColor = window.getComputedStyle(colorChecker).getPropertyValue('color');
  colorChecker.style.color = testColor;
  let updatedColor = window.getComputedStyle(colorChecker).getPropertyValue('color');
  if (updatedColor != originalColor) return true;
  
  // if necessary, test again with a different original color
  colorChecker.style.color = 'rgb(0,0,0)';
  originalColor = window.getComputedStyle(colorChecker).getPropertyValue('color');
  colorChecker.style.color = testColor;
  updatedColor = window.getComputedStyle(colorChecker).getPropertyValue('color');
  if (updatedColor != originalColor) return true;
  
  return false;
}

