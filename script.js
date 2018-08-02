import { ChickenScratch } from './chicken-scratch.js';

ChickenScratch.registerStyle('cs-green',{color: '#396'});
ChickenScratch.registerStyle('cs-big',{size: 60, lineHeight: 1.1});
ChickenScratch.registerStyle('cs-heavy',{strokeWidth: 8});
ChickenScratch.registerStyle('cs-light',{strokeWidth: 2});
ChickenScratch.registerStyle('cs-hi-rotation',{maxRotation: 20, maxTranslation: 0, color: '#933'});
ChickenScratch.registerStyle('cs-lo-rotation',{maxRotation: 8, maxTranslation: 0, color: '#393'});
ChickenScratch.registerStyle('cs-hi-translation',{maxTranslation: .14, maxRotation: 0, color: '#369'});
ChickenScratch.registerStyle('cs-lo-translation',{maxTranslation: .04, maxRotation: 0, color: '#c74'});
ChickenScratch.registerStyle('cs-expand',{letterSpacing: .5, color: '#639'});
ChickenScratch.registerStyle('cs-condense',{letterSpacing: -.1, color: '#cc2'});
ChickenScratch.registerStyle('cs-shadow',{shadowVisibility: true, shadowOffsetX: 5, shadowOffsetY: 3, shadowBlur: 3, shadowColor: '#bcd'});
ChickenScratch.registerStyle('cs-boring',{strokeWidth: 2, maxRotation: 0, maxTranslation: 0, letterSpacing: -0.1 });

ChickenScratch.registerStyle('cs-construction-paper',{ 
  maxRotation: 10,
  maxTranslation: .10,
  size: 72, 
  color: '#58b',
  strokeWidth: 12,
  lineHeight: 1.25,
  letterSpacing: .25, 
  lineCap: 'square',
  shadowVisibility: true, 
  shadowBlur: 10,
  shadowOffsetX: 5,
  shadowOffsetY: 3,
  shadowColor: '#864'
});


ChickenScratch.apply();