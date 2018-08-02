export class Style {
  constructor(name, styleProps) {
    
    this.name = name;
    this.instances = 0;
    // this.camelName = kebabToCamel(name);
    
    // Go through each key in the default props
    // and validate it on the test style
    for (let key in defaultProps) {

      // if property is invalid (i.e., not set or
      // set to an inappropriate value)
      if (!propertyIsValid(styleProps, key)) {
        // ...set it to the value of the default style
        this[key] = defaultProps[key];
        
      } else {
        // otherwise set it to the value passed in
        this[key] = styleProps[key];
      }
    }
  }
  
  generateRandomRotation() {
    return (Math.random() * degToRad(this.maxRotation * 2)) - (degToRad(this.maxRotation));
  }
  
  generateRandomTranslation() {
    return {
      x: (Math.random() * this.maxTranslation * this.size * 2) - (this.maxTranslation * this.size),
      y: (Math.random() * this.maxTranslation * this.size * 1.5) - (this.maxTranslation * this.size * .75)
    };
  }

  calculateCanvasSize(word) {
    let baseOffset = this.baseOffset;
  
    let shadow = {x: 0, y: 0};

    if (this.shadowVisibility) {
      shadow = {
        x: this.shadowOffsetX + this.shadowBlur,
        y: this.shadowOffsetY + this.shadowBlur
      }
    }    
    
    return {
      x: (word.length * this.charWidth) - this.charGap + (baseOffset.x * 2) + shadow.x + 1,
      y: this.charHeight + (baseOffset.y * 2) + shadow.y + 1
    };
  }
  
  calculateWordSize(word) {
    return {
      x: (word.length * this.charWidth)  - this.charGap,
      y: this.charHeight
    };
  }

  // NOTE: This was originally called letterSpacing, but we
  // already have a prop on Style called letterSpacing
  get newId() {
    this.instances++;
    return this.name + '-' + this.instances;
    
  }
  
  get charGap() {
    return ((this.size * .75) + this.strokeWidth) * this.letterSpacing;
  }
  
  get charHeight() {
    // NOTE: This 7/6 is to account for the extra height of lowercase
    // letters with 'tails': g, j, p, q, and y
    return ((this.size * (7/6)) + this.strokeWidth) * this.lineHeight;
  }
  
  get charWidth() {
    return ((this.size * .75) + this.strokeWidth) * (1 + this.letterSpacing);
  }
  
  get baseOffset() {
    let rotationOffset = this.calculateRotationOffset();
    let translationOffset = this.calculateTranslationOffset();
    let lineWidthOffset = this.calculateLineWidthOffset();
    
    return {
      x: rotationOffset.x + translationOffset.x + lineWidthOffset,
      y: rotationOffset.y + translationOffset.y + lineWidthOffset
    }
  }
  
  calculateLineWidthOffset() {
    switch (this.lineCap) {
      case 'butt':
        return Math.sin((Math.PI / 2) - degToRad(this.maxRotation)) * this.strokeWidth * .5;
        break;
      case 'square':
        return Math.sin((Math.PI / 4) + degToRad(this.maxRotation)) * Math.sqrt(2 * Math.pow(this.strokeWidth * .5,2));
        break;
      case 'round':
        return this.strokeWidth * .5;
        break;
    }
  }

  calculateRotationOffset() {
    return {
      x: Math.sin(degToRad(this.maxRotation)) * (this.size / 2),
      y:  Math.sin(degToRad(this.maxRotation)) * ((this.size * .75) / 2)
    };
  }

  calculateTranslationOffset(dimension) {
    return {
      x: this.maxTranslation * this.size * .75,
      y: this.maxTranslation * this.size
    }
  }  
}

const defaultProps = {
  size: 48,
  color: 'black',
  strokeWidth: 2,
  maxRotation: 0,
  maxTranslation: .0,
  lineHeight: 1.3,
  letterSpacing: 0,
  lineCap: 'butt',
  shadowVisibility: false, 
  shadowBlur: 6,
  shadowOffsetX: 4,
  shadowOffsetY: 2,
  shadowColor: '#555'  
}

function degToRad(deg) {
  return (deg / 360) * Math.PI * 2;
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
/*
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
*/

function colorIsValid(testColor) {
  let  returnVal = false;
  // Create an element and append it to body
  let body = document.getElementsByTagName('body')[0]
  
  let colorChecker = document.createElement('div');
  colorChecker.style.position = 'absolute';
  colorChecker.style.opacity = 0;
  body.appendChild(colorChecker);
  
  // Set original color and test updated color
  colorChecker.style.color = 'rgb(255,255,255)';
  let originalColor = window.getComputedStyle(colorChecker).getPropertyValue('color');
  colorChecker.style.color = testColor;
  let updatedColor = window.getComputedStyle(colorChecker).getPropertyValue('color');
  if (updatedColor != originalColor) returnVal = true;
  
  // if necessary, test again with a different original color
  colorChecker.style.color = 'rgb(0,0,0)';
  originalColor = window.getComputedStyle(colorChecker).getPropertyValue('color');
  colorChecker.style.color = testColor;
  updatedColor = window.getComputedStyle(colorChecker).getPropertyValue('color');
  if (updatedColor != originalColor) returnVal = true;
  
  body.removeChild(colorChecker);
  
  return returnVal;
}
