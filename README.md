# Chicken Scratch
---
A JavaScript module that takes the text content of an HTML element and renders it on canvas elements in a style that looks like messy handwriting.  It's useful for adding some funk to titles, headings, slogans, and the like.

## Getting Started

### Installation

`npm install chicken-scratch`

### Usage

Import the module:

`import { ChickenScratch } from './chicken-scratch.js';`

Apply the default class to an html element:

`<div class="chicken-scratch">Some awesome text</div>`

Trigger application of the style in JS:

`ChickenScratch.apply();`

Or register a custom style and apply that.

HTML:

`<div class="my-awesome-style">More awesome text</div>`

JS: 
```
ChickenScratch.registerStyle('my-awesome-style', { size: 24, color: '#396' });
ChickenScratch.apply();
```

Styles can also be added and removed programmatically:

Add:

```
let myElement = document.querySelector('#my-element');
ChickenScratch.addStyleToEl('my-awesome-style',myElement);
```

Or remove:

```
let myElement = document.querySelector('#my-element');
ChickenScratch.removeStyleFromEl(myElement);
```

If you add a style to and element which already has a Chicken Scratch style applied, the old style will be replaced by the new one.  If you attempt to remove a style from an element which actually has no Chicken Scratch style applied

### Writing custom styles

Chicken Scratch applys a randomly generated translation and rotation to each stroke of each character of each word in an element's text content.  You specify the maximum rotation (in degrees) and the maximum translation (as a ratio of the size of a single character).  The color, width, size, letter spacing, line height, and shadows applied to the text depends on the style properties you choose.  Pass your desired style props to ChickenScratch.registerStyle() as a JS object:

`ChickenScratch.registerStyle('style-name',{styleProp1: value, styleProp2: value, ...});


Below are the various style properties you can define in your custom style and their default values:

| prop |accepted values | default 
| --- | --- | --- 
| size |  a number >= 1  |  32  
| color | any valid css color | 'black' 
| strokeWidth | a number >= 2 | 5 
| maxRotation | a number >= 0 | 12 
| maxTranslation | a number >= 0 | .08
| lineHeight | a number >= 0 | 1.3 
| letterSpacing | a number >= -1 | 0.1 
| lineCap | 'butt', 'round', 'square' | 'square' 
| shadowVisibility | `true` or `false` | `false` 
| shadowColor | any valid css color | '#555' 
| shadowOffsetX | any number | 4 
| shadowOffsetY | any number | 2 
| shadowBlur | any number >= 0 | 6 

You need not include every style property in a custom style.  Any of the above properties not included in your style definition will simply fall back to the default value.  For example, if you wanted to use the default style but in blue instead of black, the following style definition would be sufficient:

`
ChickenScratch.registerStyle('blue-style',{color: 'blue'});
`

### Notes

`maxRotation` should be given in **degrees** and represents the maximum rotation that any stroke in a character will receive.  For `maxRotation: 12` (the default value), no  stroke in a character will be rotated more than 12 degrees (clockwise or counter-clockwise)

`maxTranslation` represents a fraction of the character size.  For a style with `size: 50, maxTranslation: .2`, no stroke will be translated more than 10 units in any direction (50 * .2 = 10);

`lineHeight` behaves more or less like the css property of the same name.  If a style has `lineHeight: 1`, the bottom of one line will nearly touch the top of the subsequent line.

`letterSpacing` also represents a fraction of the character size.  If `letterSpacing: 0`, characters in a word will nearly touch.  A sufficiently large negative value will cause them to overlap.  


### PS 
Thanks for your interest.  Comments and criticism are welcomed.