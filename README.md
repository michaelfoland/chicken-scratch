# Chicken Scratch
---
A JavaScript module that takes the text content of an HTML element and renders it on canvas elements in a style that looks like messy handwriting.  It's useful for adding some funk to titles, headings, slogans, and the like.

## Getting Started

### Installation

`npm install chicken-scratch`

### Usage

Import the module:

`import * from chicken-scratch;`

Apply the default style to an html element:

`<div class="chicken-scratch">Some awesome text</div>`

Or register a custom style and apply that.

JS: 

`chickenScratch.registerStyle('my-awesome-style', { size: 24, color: ''#396' });`

HTML:

`<div class="my-awesome-style">More awesome text</div>`

### Writing custom styles

Chicken Scratch works by applying a randomly generated translation and rotation to each stroke of each character of each word in an element's text content.  How those strokes, characters, and words are drawn depends the style properties you choose.

Below are the various style properties you can define in your custom style and their default values:

| prop |accepted values | default 
| --- | --- | --- 
| size |  a number >= 1  |  32  
| color | any valid css color | 'black' 
| strokeWidth | a number >= 2 | 5 
| maxRotation | a number >= 0 | 10 
| maxTranslation | a number >= 0 | .10
| lineHeight | a number >= 0 | 1.4 
| letterSpacing | a number >= -1 | .2 
| lineCap | 'butt', 'round', 'square' | 'square' 
| shadowVisibility | `true` or `false` | `false` 
| shadowColor | any valid css color | '#555' 
| shadowOffsetX | any number | 4 
| shadowOffsetY | any number | 2 
| shadowBlur | any number >= 0 | 6 

You need not include every style property in a custom style.  Any of the above properties not included in your style definition will simply fallback to the default value.  For example, if you wanted to use the default style but in blue instead of black, the following style definition would be sufficient:

`myStyle = { color: 'blue'};`

### Notes

`maxRotation` should be given in degrees and represents the maximum rotation that any stroke in a character will receive.  For `maxRotation: 10`, no  stroke in a character will be rotated more than 10 degrees (clockwise or counter-clockwise)

`maxTranslation` represents a fraction of the character size.  For a style with `size: 50, maxTranslation: .2`, no stroke will be translated more than 10 units in any direction.

`lineHeight` behaves more or less like the css property of the same name.  If a style has `lineHeight: 1`, the bottom of line x will touch the top of line x + 1.

`letterSpacing` also represents a fraction of the character size.  If `letterSpacing: 0`, characters in a word will touch.  A negative value will cause them to overlap.  


