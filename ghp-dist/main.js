!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){window,t.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=n(2),a=new Map;a.set("chicken-scratch",new s.Style("chicken-scratch",{}));var r=new Map;function y(t,e){var n={};return n.originalText=t.textContent,n.words=function(t){return t=(t=t.replace(/[^\d\w\s`~!@#$%&*()\-_=+{}|:;"',<.>?/\\\[\]\^]/g,"")).replace(/\s+/," ")}(t.textContent).split(" "),n.innerHTML=t.innerHTML,n.styleName=e.name,n.csId=e.newId,n.transforms=l(e,n.words),r.set(n.csId,n),n}function o(t,e){var n=e.styleName,s=e.words,r=e.transforms,y=e.csId,o=a.get(n);t.innerHTML="",t.dataset.csId=y;var l=o.charWidth;s.forEach(function(n,s){var a=o.calculateWordSize(n),y=o.calculateCanvasSize(n),p=document.createElement("canvas");p.dataset.csId=e.csId+"-canvas-"+s,p.width=y.x,p.height=y.y,p.style.display="inline-block";var h=l/2-(y.x-a.x)/2+"px",b=0-(y.y-a.y)/2+"px";p.style.margin=b+" "+h,function(t,e,n,s){var a=t.getContext("2d");!function(t,e){e.strokeStyle=t.color,e.lineWidth=t.strokeWidth,t.shadowVisibility&&(e.shadowColor=t.shadowColor,e.shadowOffsetX=t.shadowOffsetX,e.shadowOffsetY=t.shadowOffsetY,e.shadowBlur=t.shadowBlur)}(e,a);for(var r=e.baseOffset,y=function(t){var y=n.charAt(t),o=(0,i.getStrokes)(y),l=function(t,e){return{x:e*t.charWidth,y:t.size*((t.lineHeight-1)/2)}}(e,t);o.forEach(function(n,i){var y=JSON.parse(JSON.stringify(n));!function(t,e){Array.isArray(t)?t.forEach(function(t){"line"===t.type?u(t,e):"ellipse"===t.type&&f(t,e)}):"line"===t.type?u(t,e):"ellipse"===t.type&&f(t,e)}(y,e.size/48);var o=function(t,e){if(t.strokeWidth,Array.isArray(e)){var n=[],s=[];return e.forEach(function(t){"line"===t.type?(n.push(t.start.x),n.push(t.end.x),s.push(t.start.y),s.push(t.end.y)):"ellipse"===t.type&&(n.push(t.bounds.x1),n.push(t.bounds.x2),s.push(t.bounds.y1),s.push(t.bounds.y2))}),{x:(Math.max.apply(Math,n)+Math.min.apply(Math,n))/2,y:(Math.max.apply(Math,s)+Math.min.apply(Math,s))/2}}return"line"===e.type?{x:(e.start.x+e.end.x)/2,y:(e.start.y+e.end.y)/2}:"ellipse"===e.type?{x:(e.bounds.x1+e.bounds.x2)/2,y:(e.bounds.y1+e.bounds.y2)/2}:void 0}(e,y),p=s[t][i].translation,h={x:r.x+l.x+o.x+p.x+e.strokeWidth/2,y:r.y+l.y+o.y+p.y+e.strokeWidth/2};a.save(),a.translate(h.x,h.y),a.rotate(s[t][i].rotation);var b={x:0-o.x,y:0-o.y};!function(t,e,n,s){t.beginPath(),Array.isArray(n)?n.forEach(function(e){d(t,e,s)}):d(t,n,s),t.stroke(),t.closePath(),"butt"==e.lineCap||n.noLineCaps||(Array.isArray(n)?(x(t,e,n[0],s),c(t,e,n[n.length-1],s)):(x(t,e,n,s),c(t,e,n,s))),"butt"!=e.lineCap&&e.shadowVisibility&&(t.shadowBlur=0,t.shadowColor="",t.shadowOffsetX=0,t.shadowOffsetY=0,t.beginPath(),Array.isArray(n)?n.forEach(function(e){d(t,e,s)}):d(t,n,s),t.stroke(),t.closePath(),t.shadowBlur=e.shadowBlur,t.shadowColor=e.shadowColor,t.shadowOffsetX=e.shadowOffsetX,t.shadowOffsetY=e.shadowOffsetY)}(a,e,y,b),a.restore()})},o=0;o<n.length;o++)y(o)}(p,o,n,r[s]),t.appendChild(p),t.style.visibility="visible"})}function l(t,e){var n=[];return e.forEach(function(e,s){n.push([]);for(var a=0;a<e.length;a++){n[s].push([]);for(var r=(0,i.getStrokes)(e.charAt(a)),y=0;y<r.length;y++)n[s][a].push({rotation:t.generateRandomRotation(),translation:t.generateRandomTranslation()})}}),n}function d(t,e,n){"line"==e.type?(t.moveTo(e.start.x+n.x,e.start.y+n.y),t.lineTo(e.end.x+n.x,e.end.y+n.y)):"ellipse"==e.type&&function(t,e,n,s,i,a,r,y){var o=.5*(s-e),l=.5*(i-n),d=e+o,x=n+l,c=a;if(Math.PI,t.lineWidth*=.5,t.moveTo(d+o*Math.cos(c),x+l*Math.sin(c)),"clockwise"===y)for(r<a&&(r+=2*Math.PI);c<r;c+=.05)t.lineTo(d+o*Math.cos(c),x+l*Math.sin(c));else if("counter-clockwise"===y)for(r>a&&(r-=2*Math.PI);c>r;c-=.05)t.lineTo(d+o*Math.cos(c),x+l*Math.sin(c));t.lineWidth*=2}(t,e.bounds.x1+n.x,e.bounds.y1+n.y,e.bounds.x2+n.x,e.bounds.y2+n.y,e.start,e.end,e.direction)}function x(t,e,n,s){t.lineCap=e.lineCap,t.beginPath();var i=p("start",n,s);t.moveTo(i.x1,i.y1),t.lineTo(i.x2,i.y2),t.stroke(),t.closePath(),t.lineCap="butt"}function c(t,e,n,s){t.lineCap=e.lineCap,t.beginPath();var i=p("end",n,s);t.moveTo(i.x1,i.y1),t.lineTo(i.x2,i.y2),t.stroke(),t.closePath(),t.lineCap="butt"}function p(t,e,n){if("ellipse"==e.type)return function(t,e,n){return"start"==t?function(t,e){var n=.5*(t.bounds.x2-t.bounds.x1),s=.5*(t.bounds.y2-t.bounds.y1),i=t.bounds.x1+n,a=t.bounds.y1+s,r=void 0;return"clockwise"==t.direction?r=t.start+.05:"counter-clockwise"==t.direction&&(r=t.start-.05),{x1:i+n*Math.cos(t.start)+e.x,y1:a+s*Math.sin(t.start)+e.y,x2:i+n*Math.cos(r)+e.x,y2:a+s*Math.sin(r)+e.y}}(e,n):"end"==t?function(t,e){var n=.5*(t.bounds.x2-t.bounds.x1),s=.5*(t.bounds.y2-t.bounds.y1),i=t.bounds.x1+n,a=t.bounds.y1+s,r=void 0;return"clockwise"==t.direction?r=t.end-.05:"counter-clockwise"==t.direction&&(r=t.end+.05),{x1:i+n*Math.cos(t.end)+e.x,y1:a+s*Math.sin(t.end)+e.y,x2:i+n*Math.cos(r)+e.x,y2:a+s*Math.sin(r)+e.y}}(e,n):void 0}(t,e,n);if("line"==e.type){var s=void 0,i=void 0;if("start"==t)return i=0==(s=e.start.x<e.end.x?.1:e.start.x>e.end.x?-.1:0)?e.start.y<e.end.y?.1:-.1:s*((e.start.y-e.end.y)/(e.start.x-e.end.x)),{x1:n.x+e.start.x,y1:n.y+e.start.y,x2:n.x+e.start.x+s,y2:n.y+e.start.y+i};if("end"==t)return i=0==(s=e.start.x<e.end.x?-.1:e.start.x>e.end.x?.1:0)?e.start.y<e.end.y?-.1:.1:s*((e.start.y-e.end.y)/(e.start.x-e.end.x)),{x1:n.x+e.end.x,y1:n.y+e.end.y,x2:n.x+e.end.x+s,y2:n.y+e.end.y+i}}}function h(t,e){return(t-1)*e+1}function u(t,e){for(var n in t.start)t.start[n]=h(t.start[n],e);for(var s in t.end)t.end[s]=h(t.end[s],e)}function f(t,e){for(var n in t.bounds)t.bounds[n]=h(t.bounds[n],e)}e.default={registerStyle:function(t,e){if("chicken-scratch"!=t&&"chickenScratch"!=t){var n=new s.Style(t,e);a.set(n.name,n)}},apply:function(){a.forEach(function(t){var e=Array.from(document.getElementsByClassName(t.name));e.forEach(function(e){var n=y(e,t);o(e,n)})})},addStyleToEl:function(t,e){if(e.dataset.csId){var n=r.get(e.dataset.csId),s=a.get(t);n.styleName=s.name,n.csId=s.newId,n.transforms=l(s,n.words),o(e,n)}else{var i=a.get(t),d=y(e,i);o(e,d)}},removeStyleFromEl:function(t){if(t.dataset.csId){var e=r.get(t.dataset.csId);r.delete(e.csId),t.removeAttribute("data-cs-id"),t.innerHTML=e.innerHTML}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();e.Style=function(){function t(e,n){for(var s in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.instances=0,i)r(n,s)?this[s]=n[s]:this[s]=i[s]}return s(t,[{key:"generateRandomRotation",value:function(){return Math.random()*a(2*this.maxRotation)-a(this.maxRotation)}},{key:"generateRandomTranslation",value:function(){return{x:Math.random()*this.maxTranslation*this.size*2-this.maxTranslation*this.size,y:Math.random()*this.maxTranslation*this.size*1.5-this.maxTranslation*this.size*.75}}},{key:"calculateCanvasSize",value:function(t){var e=this.baseOffset,n={x:0,y:0};return this.shadowVisibility&&(n={x:this.shadowOffsetX+this.shadowBlur,y:this.shadowOffsetY+this.shadowBlur}),{x:t.length*this.charWidth-this.charGap+2*e.x+n.x+1,y:this.charHeight+2*e.y+n.y+1}}},{key:"calculateWordSize",value:function(t){return{x:t.length*this.charWidth-this.charGap,y:this.charHeight}}},{key:"calculateLineWidthOffset",value:function(){switch(this.lineCap){case"butt":return Math.sin(Math.PI/2-a(this.maxRotation))*this.strokeWidth*.5;case"square":return Math.sin(Math.PI/4+a(this.maxRotation))*Math.sqrt(2*Math.pow(.5*this.strokeWidth,2));case"round":return.5*this.strokeWidth}}},{key:"calculateRotationOffset",value:function(){return{x:Math.sin(a(this.maxRotation))*(this.size/2),y:Math.sin(a(this.maxRotation))*(.75*this.size/2)}}},{key:"calculateTranslationOffset",value:function(t){return{x:this.maxTranslation*this.size*.75,y:this.maxTranslation*this.size}}},{key:"newId",get:function(){return this.instances++,this.name+"-"+this.instances}},{key:"charGap",get:function(){return(.75*this.size+this.strokeWidth)*this.letterSpacing}},{key:"charHeight",get:function(){return(this.size*(7/6)+this.strokeWidth)*this.lineHeight}},{key:"charWidth",get:function(){return(.75*this.size+this.strokeWidth)*(1+this.letterSpacing)}},{key:"baseOffset",get:function(){var t=this.calculateRotationOffset(),e=this.calculateTranslationOffset(),n=this.calculateLineWidthOffset();return{x:t.x+e.x+n,y:t.y+e.y+n}}}]),t}();var i={size:32,color:"black",strokeWidth:5,maxRotation:12,maxTranslation:.08,lineHeight:1.3,letterSpacing:.1,lineCap:"square",shadowVisibility:!1,shadowBlur:6,shadowOffsetX:4,shadowOffsetY:2,shadowColor:"#555"};function a(t){return t/360*Math.PI*2}function r(t,e){if(!t.hasOwnProperty(e))return!1;switch(e){case"strokeWidth":if("number"==typeof t[e]&&t[e]>=2)return!0;break;case"size":if("number"==typeof t[e]&&t[e]>=1)return!0;break;case"lineHeight":case"maxRotation":case"maxTranslation":case"shadowBlur":if("number"==typeof t[e]&&t[e]>=0)return!0;break;case"letterSpacing":if("number"==typeof t[e]&&t[e]>=-1)return!0;break;case"lineCap":if("string"==typeof t[e]&&"square"==t[e]||"round"==t[e]||"butt"==t[e])return!0;break;case"shadowOffsetX":case"shadowOffsetY":if("number"==typeof t[e])return!0;break;case"color":case"shadowColor":if(function(t){var e=!1,n=document.getElementsByTagName("body")[0],s=document.createElement("div");s.style.position="absolute",s.style.opacity=0,n.appendChild(s),s.style.color="rgb(255,255,255)";var i=window.getComputedStyle(s).getPropertyValue("color");s.style.color=t;var a=window.getComputedStyle(s).getPropertyValue("color");return a!=i?e=!0:(s.style.color="rgb(0,0,0)",i=window.getComputedStyle(s).getPropertyValue("color"),s.style.color=t,(a=window.getComputedStyle(s).getPropertyValue("color"))!=i&&(e=!0)),n.removeChild(s),e}(t[e]))return!0;break;case"shadowVisibility":if("boolean"==typeof t[e])return!0}return!1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getStrokes=function(t){return/[a-zA-Z]/.exec(t)?i[t]:/[0-9]/.exec(t)?i["_"+t]:i[s.get(t)]};var s=new Map;s.set(".","_period"),s.set(",","_comma"),s.set("!","_exclamation"),s.set("?","_question"),s.set("'","_singleQuote"),s.set('"',"_doubleQuote"),s.set("@","_at"),s.set("#","_pound"),s.set("$","_dollar"),s.set("%","_percent"),s.set("^","_caret"),s.set("&","_ampersand"),s.set("*","_asterisk"),s.set("(","_leftParen"),s.set(")","_rightParen"),s.set("-","_hyphen"),s.set("+","_plus"),s.set("=","_equal"),s.set(":","_colon"),s.set(";","_semiColon"),s.set("/","_slash"),s.set("\\","_backSlash"),s.set("{","_leftBrace"),s.set("}","_rightBrace"),s.set("[","_leftBracket"),s.set("]","_rightBracket"),s.set("<","_lessThan"),s.set(">","_greaterThan"),s.set("~","_tilde"),s.set("`","_backtick"),s.set("_","_underscore"),s.set("|","_pipe");var i={a:[{type:"ellipse",bounds:{x1:4,y1:19,x2:34,y2:49},start:3.72*Math.PI,end:1.7*Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:34,y:19},end:{x:34,y:49}}],b:[{type:"line",start:{x:4,y:1},end:{x:4,y:49}},{type:"ellipse",bounds:{x1:4,y1:19,x2:34,y2:49},start:3.72*Math.PI,end:1.7*Math.PI,direction:"counter-clockwise"}],c:[{type:"ellipse",bounds:{x1:4,y1:19,x2:34,y2:49},start:1.8*Math.PI,end:.2*Math.PI,direction:"counter-clockwise"}],d:[{type:"ellipse",bounds:{x1:4,y1:19,x2:34,y2:49},start:3.72*Math.PI,end:1.7*Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:34,y:1},end:{x:34,y:49}}],e:[{type:"ellipse",bounds:{x1:4,y1:19,x2:34,y2:49},start:1.9*Math.PI,end:.15*Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:5,y:30},end:{x:33,y:30}}],f:[[{type:"ellipse",bounds:{x1:12,y1:1,x2:34,y2:23},start:2*Math.PI,end:Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:12,y:10},end:{x:12,y:47}}],{type:"line",start:{x:1,y:21},end:{x:30,y:21}}],g:[{type:"ellipse",bounds:{x1:5,y1:19,x2:33,y2:47},start:3.85*Math.PI,end:1.83*Math.PI,direction:"counter-clockwise"},[{type:"line",start:{x:33,y:19},end:{x:33,y:47}},{type:"ellipse",bounds:{x1:5,y1:37,x2:33,y2:57},start:0,end:.85*Math.PI,direction:"clockwise"}]],h:[{type:"line",start:{x:4,y:1},end:{x:4,y:49}},[{type:"ellipse",bounds:{x1:4,y1:19,x2:34,y2:49},start:Math.PI,end:2*Math.PI,direction:"clockwise"},{type:"line",start:{x:34,y:33},end:{x:34,y:49}}]],i:[{type:"line",start:{x:19,y:19},end:{x:19,y:49}},{type:"ellipse",bounds:{x1:18,y1:6,x2:20,y2:8},start:0,end:2*Math.PI,direction:"clockwise"}],j:[[{type:"line",start:{x:34,y:19},end:{x:34,y:42}},{type:"ellipse",bounds:{x1:4,y1:25,x2:34,y2:57},start:0,end:Math.PI,direction:"clockwise"}],{type:"ellipse",bounds:{x1:33,y1:6,x2:35,y2:8},start:0,end:2*Math.PI,direction:"clockwise"}],k:[{type:"line",start:{x:4,y:1},end:{x:4,y:49}},{type:"line",start:{x:30,y:19},end:{x:4,y:33}},{type:"line",start:{x:9,y:29},end:{x:30,y:49}}],l:[{type:"line",start:{x:19,y:1},end:{x:19,y:49}}],m:[{type:"line",start:{x:1,y:18},end:{x:1,y:49}},[{type:"line",start:{x:1,y:49},end:{x:1,y:25}},{type:"ellipse",bounds:{x1:1,y1:19,x2:19,y2:37},start:Math.PI,end:2*Math.PI,direction:"clockwise"},{type:"line",start:{x:19,y:25},end:{x:19,y:49}}],[{type:"line",start:{x:19,y:49},end:{x:19,y:25}},{type:"ellipse",bounds:{x1:19,y1:19,x2:37,y2:37},start:Math.PI,end:2*Math.PI,direction:"clockwise"},{type:"line",start:{x:37,y:25},end:{x:37,y:49}}]],n:[{type:"line",start:{x:4,y:19},end:{x:4,y:49}},[{type:"line",start:{x:4,y:49},end:{x:4,y:31}},{type:"ellipse",bounds:{x1:4,y1:19,x2:34,y2:49},start:Math.PI,end:2*Math.PI,direction:"clockwise"},{type:"line",start:{x:34,y:31},end:{x:34,y:49}}]],o:[{type:"ellipse",bounds:{x1:4,y1:19,x2:34,y2:49},start:3.8*Math.PI,end:1.78*Math.PI,direction:"counter-clockwise"}],p:[{type:"line",start:{x:4,y:19},end:{x:4,y:57}},{type:"ellipse",bounds:{x1:5,y1:19,x2:33,y2:47},start:3.8*Math.PI,end:1.78*Math.PI,direction:"counter-clockwise"}],q:[{type:"ellipse",bounds:{x1:5,y1:19,x2:33,y2:47},start:3.8*Math.PI,end:1.78*Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:34,y:19},end:{x:34,y:57}}],r:[{type:"line",start:{x:4,y:19},end:{x:4,y:49}},{type:"ellipse",bounds:{x1:4,y1:19,x2:34,y2:49},start:Math.PI,end:1.9*Math.PI,direction:"clockwise"}],s:[[{type:"ellipse",bounds:{x1:6,y1:19,x2:32,y2:34},start:1.95*Math.PI,end:.48*Math.PI,direction:"counter-clockwise"},{type:"ellipse",bounds:{x1:6,y1:34,x2:32,y2:49},start:1.48*Math.PI,end:.95*Math.PI,direction:"clockwise"}]],t:[{type:"line",start:{x:19,y:7},end:{x:19,y:49}},{type:"line",start:{x:5,y:19},end:{x:33,y:19}}],u:[[{type:"line",start:{x:4,y:19},end:{x:4,y:34}},{type:"ellipse",bounds:{x1:4,y1:19,x2:34,y2:49},start:Math.PI,end:0,direction:"counter-clockwise"},{type:"line",start:{x:34,y:34},end:{x:34,y:19}}],{type:"line",start:{x:34,y:19},end:{x:34,y:49}}],v:[{type:"line",start:{x:4,y:19},end:{x:19,y:49}},{type:"line",start:{x:19,y:49},end:{x:34,y:19}}],w:[{type:"line",start:{x:1,y:19},end:{x:11,y:49}},{type:"line",start:{x:11,y:49},end:{x:19,y:27}},{type:"line",start:{x:19,y:27},end:{x:27,y:49}},{type:"line",start:{x:27,y:49},end:{x:37,y:19}}],x:[{type:"line",start:{x:4,y:19},end:{x:34,y:49}},{type:"line",start:{x:34,y:19},end:{x:4,y:49}}],y:[{type:"line",start:{x:4,y:19},end:{x:18,y:42}},{type:"line",start:{x:34,y:19},end:{x:9,y:57}}],z:[{type:"line",start:{x:4,y:19},end:{x:34,y:19}},{type:"line",start:{x:34,y:19},end:{x:4,y:49}},{type:"line",start:{x:4,y:49},end:{x:34,y:49}}],A:[{type:"line",start:{x:19,y:1},end:{x:1,y:49}},{type:"line",start:{x:19,y:1},end:{x:37,y:49}},{type:"line",start:{x:11,y:25},end:{x:29,y:25}}],B:[{type:"line",start:{x:1,y:1},end:{x:1,y:49}},[{type:"line",start:{x:1,y:1},end:{x:26,y:1}},{type:"ellipse",bounds:{x1:13,y1:1,x2:37,y2:25},start:1.5*Math.PI,end:.5*Math.PI,direction:"clockwise"},{type:"line",start:{x:26,y:25},end:{x:1,y:25}}],[{type:"line",start:{x:1,y:25},end:{x:26,y:25}},{type:"ellipse",bounds:{x1:13,y1:25,x2:37,y2:49},start:1.5*Math.PI,end:.5*Math.PI,direction:"clockwise"},{type:"line",start:{x:26,y:49},end:{x:1,y:49}}]],C:[{type:"ellipse",bounds:{x1:1,y1:1,x2:41,y2:49},start:1.8*Math.PI,end:.2*Math.PI,direction:"counter-clockwise"}],D:[{type:"line",start:{x:1,y:1},end:{x:1,y:49}},[{type:"line",start:{x:1,y:1},end:{x:14,y:1}},{type:"ellipse",bounds:{x1:-11,y1:1,x2:37,y2:49},start:1.5*Math.PI,end:.5*Math.PI,direction:"clockwise"},{type:"line",start:{x:14.5,y:49},end:{x:1,y:49}}]],E:[{type:"line",start:{x:1,y:1},end:{x:1,y:49}},{type:"line",start:{x:1,y:1},end:{x:37,y:1}},{type:"line",start:{x:1,y:25},end:{x:28,y:25}},{type:"line",start:{x:1,y:49},end:{x:37,y:49}}],F:[{type:"line",start:{x:1,y:1},end:{x:1,y:49}},{type:"line",start:{x:1,y:1},end:{x:37,y:1}},{type:"line",start:{x:1,y:25},end:{x:28,y:25}}],G:[[{type:"ellipse",bounds:{x1:1,y1:1,x2:37,y2:49},start:1.85*Math.PI,end:Math.PI-.05,direction:"counter-clockwise"},{type:"ellipse",bounds:{x1:1,y1:1,x2:37,y2:49},start:Math.PI+.05,end:.08*Math.PI,direction:"counter-clockwise"}],{type:"line",start:{x:37,y:30},end:{x:22,y:30}}],H:[{type:"line",start:{x:1,y:1},end:{x:1,y:49}},{type:"line",start:{x:1,y:25},end:{x:37,y:25}},{type:"line",start:{x:37,y:1},end:{x:37,y:49}}],I:[{type:"line",start:{x:19,y:1},end:{x:19,y:49}},{type:"line",start:{x:1,y:1},end:{x:37,y:1}},{type:"line",start:{x:1,y:49},end:{x:37,y:49}}],J:[[{type:"line",start:{x:37,y:1},end:{x:37,y:34.5}},{type:"ellipse",bounds:{x1:1,y1:17,x2:37,y2:49},start:0,end:Math.PI,direction:"clockwise"},{type:"line",start:{x:1,y:34.5},end:{x:1,y:28}}]],K:[{type:"line",start:{x:1,y:1},end:{x:1,y:49}},{type:"line",start:{x:37,y:1},end:{x:1,y:25}},{type:"line",start:{x:1,y:25},end:{x:37,y:49}}],L:[{type:"line",start:{x:1,y:1},end:{x:1,y:49}},{type:"line",start:{x:1,y:49},end:{x:37,y:49}}],M:[{type:"line",start:{x:1,y:1},end:{x:1,y:49}},{type:"line",start:{x:1,y:1},end:{x:19,y:37}},{type:"line",start:{x:19,y:37},end:{x:37,y:1}},{type:"line",start:{x:37,y:1},end:{x:37,y:49}}],N:[{type:"line",start:{x:1,y:1},end:{x:1,y:49}},{type:"line",start:{x:1,y:1},end:{x:37,y:49}},{type:"line",start:{x:37,y:1},end:{x:37,y:49}}],O:[{noLineCaps:!0,type:"ellipse",bounds:{x1:1,y1:1,x2:37,y2:49},start:3.62*Math.PI,end:1.58*Math.PI,direction:"counter-clockwise"}],P:[{type:"line",start:{x:1,y:1},end:{x:1,y:49}},[{type:"line",start:{x:1,y:1},end:{x:26,y:1}},{type:"ellipse",bounds:{x1:13,y1:1,x2:37,y2:25},start:1.5*Math.PI,end:.5*Math.PI,direction:"clockwise"},{type:"line",start:{x:26,y:25},end:{x:1,y:25}}]],Q:[{noLineCaps:!0,type:"ellipse",bounds:{x1:1,y1:1,x2:37,y2:49},start:3.62*Math.PI,end:1.58*Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:25,y:37},end:{x:37,y:49}}],R:[{type:"line",start:{x:1,y:1},end:{x:1,y:49}},[{type:"line",start:{x:1,y:1},end:{x:26,y:1}},{type:"ellipse",bounds:{x1:13,y1:1,x2:37,y2:25},start:1.5*Math.PI,end:.5*Math.PI,direction:"clockwise"},{type:"line",start:{x:26,y:25},end:{x:1,y:25}}],{type:"line",start:{x:19,y:25},end:{x:37,y:49}}],S:[[{type:"ellipse",bounds:{x1:1,y1:1,x2:37,y2:25},start:1.95*Math.PI,end:.58*Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:12.5,y:24.2},end:{x:25.5,y:25.8}},{type:"ellipse",bounds:{x1:1,y1:25,x2:37,y2:49},start:1.59*Math.PI,end:.95*Math.PI,direction:"clockwise"}]],T:[{type:"line",start:{x:19,y:1},end:{x:19,y:49}},{type:"line",start:{x:1,y:1},end:{x:37,y:1}}],U:[[{type:"line",start:{x:1,y:1},end:{x:1,y:34.3}},{type:"ellipse",bounds:{x1:1,y1:17,x2:37,y2:49},start:Math.PI,end:0,direction:"counter-clockwise"},{type:"line",start:{x:37,y:34.3},end:{x:37,y:1}}]],V:[{type:"line",start:{x:1,y:1},end:{x:19,y:49}},{type:"line",start:{x:19,y:49},end:{x:37,y:1}}],W:[{type:"line",start:{x:1,y:1},end:{x:10,y:49}},{type:"line",start:{x:10,y:49},end:{x:19,y:17}},{type:"line",start:{x:19,y:17},end:{x:28,y:49}},{type:"line",start:{x:28,y:49},end:{x:37,y:1}}],X:[{type:"line",start:{x:1,y:1},end:{x:37,y:49}},{type:"line",start:{x:37,y:1},end:{x:1,y:49}}],Y:[{type:"line",start:{x:1,y:1},end:{x:19,y:25}},{type:"line",start:{x:37,y:1},end:{x:19,y:25}},{type:"line",start:{x:19,y:25},end:{x:19,y:49}}],Z:[{type:"line",start:{x:1,y:1},end:{x:37,y:1}},{type:"line",start:{x:37,y:1},end:{x:1,y:49}},{type:"line",start:{x:1,y:49},end:{x:37,y:49}}],_0:[{noLineCaps:!0,type:"ellipse",bounds:{x1:1,y1:1,x2:37,y2:49},start:3.62*Math.PI,end:1.58*Math.PI,direction:"counter-clockwise"}],_1:[{type:"line",start:{x:19,y:1},end:{x:5,y:15}},{type:"line",start:{x:19,y:1},end:{x:19,y:49}},{type:"line",start:{x:1,y:49},end:{x:37,y:49}}],_2:[[{type:"ellipse",bounds:{x1:1,y1:1,x2:37,y2:27},start:Math.PI,end:.25*Math.PI,direction:"clockwise"},{type:"line",start:{x:33,y:22},end:{x:1,y:49}}],{type:"line",start:{x:1,y:49},end:{x:37,y:49}}],_3:[[{type:"ellipse",bounds:{x1:1,y1:1,x2:37,y2:25},start:1.15*Math.PI,end:Math.PI/2,direction:"clockwise"},{type:"line",start:{x:20,y:25},end:{x:13,y:25}}],[{type:"line",start:{x:13,y:25},end:{x:20,y:25}},{type:"ellipse",bounds:{x1:1,y1:25,x2:37,y2:49},start:1.5*Math.PI,end:.85*Math.PI,direction:"clockwise"}]],_4:[{type:"line",start:{x:7,y:1},end:{x:1,y:25}},{type:"line",start:{x:1,y:25},end:{x:37,y:25}},{type:"line",start:{x:28,y:1},end:{x:28,y:49}}],_5:[{type:"line",start:{x:7,y:1},end:{x:1,y:23}},{type:"ellipse",bounds:{x1:-9,y1:19,x2:37,y2:49},start:1.3*Math.PI,end:.7*Math.PI,direction:"clockwise"},{type:"line",start:{x:7,y:1},end:{x:37,y:1}}],_6:[[{type:"ellipse",bounds:{x1:1,y1:1,x2:39,y2:65},start:1.725*Math.PI,end:.95*Math.PI,direction:"counter-clockwise"},{type:"ellipse",bounds:{x1:1,y1:19,x2:37,y2:49},start:.95*Math.PI,end:.96*Math.PI,direction:"counter-clockwise"}]],_7:[{type:"line",start:{x:1,y:1},end:{x:37,y:1}},{type:"line",start:{x:37,y:1},end:{x:10,y:49}}],_8:[[{type:"ellipse",bounds:{x1:3,y1:1,x2:35,y2:23},start:1.6*Math.PI,end:.48*Math.PI,direction:"counter-clockwise"},{type:"ellipse",bounds:{x1:1,y1:23,x2:37,y2:49},start:1.49*Math.PI,end:1.48*Math.PI,direction:"clockwise"},{type:"ellipse",bounds:{x1:3,y1:1,x2:35,y2:23},start:.48*Math.PI,end:1.59*Math.PI,direction:"counter-clockwise"}]],_9:[{type:"ellipse",bounds:{x1:2,y1:1,x2:36,y2:30},start:3.8*Math.PI,end:1.75*Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:36,y:1},end:{x:36,y:49}}],_period:[{type:"ellipse",bounds:{x1:9,y1:47,x2:11,y2:49},start:0,end:2*Math.PI,direction:"clockwise"}],_comma:[{type:"ellipse",bounds:{x1:5,y1:1,x2:15,y2:49},start:.2*Math.PI,end:.5*Math.PI,direction:"clockwise"}],_exclamation:[{type:"line",start:{x:10,y:1},end:{x:10,y:33}},{type:"ellipse",bounds:{x1:9,y1:47,x2:11,y2:49},start:0,end:2*Math.PI,direction:"clockwise"}],_question:[[{type:"ellipse",bounds:{x1:1,y1:1,x2:33,y2:23},start:1.2*Math.PI,end:.52*Math.PI,direction:"clockwise"},{type:"line",start:{x:19,y:23},end:{x:19,y:37}}],{type:"ellipse",bounds:{x1:18,y1:47,x2:20,y2:49},start:0,end:2*Math.PI,direction:"clockwise"}],_singleQuote:[{type:"line",start:{x:19,y:1},end:{x:19,y:19}}],_doubleQuote:[{type:"line",start:{x:10,y:1},end:{x:10,y:19}},{type:"line",start:{x:28,y:1},end:{x:28,y:19}}],_pound:[{type:"line",start:{x:1,y:17},end:{x:37,y:17}},{type:"line",start:{x:1,y:33},end:{x:37,y:33}},{type:"line",start:{x:13,y:1},end:{x:13,y:47}},{type:"line",start:{x:25,y:1},end:{x:25,y:47}}],_dollar:[[{type:"ellipse",bounds:{x1:1,y1:7,x2:37,y2:25},start:1.9*Math.PI,end:.48*Math.PI,direction:"counter-clockwise"},{type:"ellipse",bounds:{x1:1,y1:25,x2:37,y2:43},start:1.52*Math.PI,end:.9*Math.PI,direction:"clockwise"}],{type:"line",start:{x:19,y:1},end:{x:19,y:49}}],_percent:[{type:"ellipse",bounds:{x1:1,y1:1,x2:16,y2:16},start:3.75*Math.PI,end:1.73*Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:37,y:1},end:{x:1,y:49}},{type:"ellipse",bounds:{x1:21,y1:33,x2:37,y2:49},start:3.75*Math.PI,end:1.73*Math.PI,direction:"counter-clockwise"}],_at:[[{type:"ellipse",bounds:{x1:13,y1:11,x2:27,y2:39},start:1.8*Math.PI,end:.2*Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:26,y:37},end:{x:26,y:17}},{type:"ellipse",bounds:{x1:27,y1:25,x2:37,y2:41},start:.9*Math.PI,end:0,direction:"counter-clockwise"},{type:"line",start:{x:37,y:34},end:{x:37,y:19}},{type:"ellipse",bounds:{x1:1,y1:1,x2:37,y2:41},start:0,end:Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:1,y:17},end:{x:1,y:28}},{type:"ellipse",bounds:{x1:1,y1:5,x2:37,y2:49},start:Math.PI,end:.75*Math.PI,direction:"counter-clockwise"}]],_caret:[{type:"line",start:{x:19,y:1},end:{x:7,y:17}},{type:"line",start:{x:19,y:1},end:{x:31,y:17}}],_ampersand:[[{type:"line",start:{x:37,y:49},end:{x:7,y:19}},{type:"ellipse",bounds:{x1:3,y1:1,x2:21,y2:21},start:.7*Math.PI,end:.35*Math.PI,direction:"clockwise"},{type:"line",start:{x:16,y:20},end:{x:6,y:27}},{type:"ellipse",bounds:{x1:1,x2:25,y1:25,y2:49},start:1.3*Math.PI,end:.15*Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:23,y:43},end:{x:33,y:29}}]],_asterisk:[{type:"line",start:{x:19,y:5},end:{x:19,y:41}},{type:"line",start:{x:3.4,y:14},end:{x:34.6,y:32}},{type:"line",start:{x:34.6,y:14},end:{x:3.4,y:32}}],_leftParen:[{type:"ellipse",bounds:{x1:10,y1:-7,x2:78,y2:57},start:1.28*Math.PI,end:.72*Math.PI,direction:"counter-clockwise"}],_rightParen:[{type:"ellipse",bounds:{x1:-40,y1:-7,x2:29,y2:57},start:1.72*Math.PI,end:.28*Math.PI,direction:"clockwise"}],_hyphen:[{type:"line",start:{x:7,y:25},end:{x:31,y:25}}],_plus:[{type:"line",start:{x:5,y:25},end:{x:33,y:25}},{type:"line",start:{x:19,y:11},end:{x:19,y:39}}],_equal:[{type:"line",start:{x:5,y:17},end:{x:33,y:17}},{type:"line",start:{x:5,y:33},end:{x:33,y:33}}],_colon:[{type:"ellipse",bounds:{x1:9,y1:18,x2:11,y2:20},start:0,end:2*Math.PI,direction:"clockwise"},{type:"ellipse",bounds:{x1:9,y1:43,x2:11,y2:45},start:0,end:2*Math.PI,direction:"clockwise"}],_semiColon:[{type:"ellipse",bounds:{x1:9,y1:18,x2:11,y2:20},start:0,end:2*Math.PI,direction:"clockwise"},{type:"ellipse",bounds:{x1:1,y1:1,x2:11,y2:49},start:.2*Math.PI,end:.5*Math.PI,direction:"clockwise"}],_slash:[{type:"line",start:{x:1,y:1},end:{x:37,y:49}}],_backSlash:[{type:"line",start:{x:37,y:1},end:{x:1,y:49}}],_leftBrace:[[{type:"line",start:{x:28,y:1},end:{x:22,y:1}},{type:"ellipse",bounds:{x1:16,y1:1,x2:28,y2:13},start:1.5*Math.PI,end:Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:16,y:7},end:{x:16,y:19}},{type:"ellipse",bounds:{x1:4,y1:13,x2:16,y2:25},start:0,end:.5*Math.PI,direction:"clockwise"},{type:"ellipse",bounds:{x1:4,y1:25,x2:16,y2:37},start:1.5*Math.PI,end:0,direction:"clockwise"},{type:"line",start:{x:16,y:31},end:{x:16,y:43}},{type:"ellipse",bounds:{x1:16,y1:37,x2:28,y2:49},start:Math.PI,end:.5*Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:22,y:49},end:{x:28,y:49}}]],_rightBrace:[[{type:"line",start:{x:16,y:1},end:{x:10,y:1}},{type:"ellipse",bounds:{x1:10,y1:1,x2:22,y2:13},start:1.5*Math.PI,end:2*Math.PI,direction:"clockwise"},{type:"line",start:{x:22,y:7},end:{x:22,y:19}},{type:"ellipse",bounds:{x1:22,y1:13,x2:34,y2:25},start:Math.PI,end:.5*Math.PI,direction:"counter-clockwise"},{type:"ellipse",bounds:{x1:22,y1:25,x2:34,y2:37},start:1.5*Math.PI,end:Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:22,y:31},end:{x:22,y:43}},{type:"ellipse",bounds:{x1:22,y1:37,x2:10,y2:49},start:Math.PI,end:.52*Math.PI,direction:"counter-clockwise"},{type:"line",start:{x:17,y:49},end:{x:10,y:49}}]],_leftBracket:[[{type:"line",start:{x:24,y:1},end:{x:15,y:1}},{type:"line",start:{x:15,y:1},end:{x:15,y:49}},{type:"line",start:{x:15,y:49},end:{x:24,y:49}}]],_rightBracket:[[{type:"line",start:{x:14,y:1},end:{x:23,y:1}},{type:"line",start:{x:23,y:1},end:{x:23,y:49}},{type:"line",start:{x:23,y:49},end:{x:14,y:49}}]],_lessThan:[{type:"line",start:{x:33,y:7},end:{x:5,y:25}},{type:"line",start:{x:5,y:25},end:{x:33,y:43}}],_greaterThan:[{type:"line",start:{x:5,y:7},end:{x:33,y:25}},{type:"line",start:{x:33,y:25},end:{x:5,y:43}}],_tilde:[[{type:"ellipse",bounds:{x1:1,y1:21,x2:20,y2:33},start:1*Math.PI,end:1.9*Math.PI,direction:"clockwise"},{type:"ellipse",bounds:{x1:18,y1:16,x2:37,y2:28},start:.9*Math.PI,end:0*Math.PI,direction:"counter-clockwise"}]],_backtick:[{type:"line",start:{x:9,y:1},end:{x:21,y:17}}],_underscore:[{type:"line",start:{x:1,y:49},end:{x:37,y:49}}],_pipe:[{type:"line",start:{x:19,y:1},end:{x:19,y:49}}]}}])},function(t,e,n){"use strict";n.r(e);var s=n(0),i=n.n(s);i.a.registerStyle("chicken-scratch-header",{size:48,strokeWidth:8}),i.a.registerStyle("chicken-scratch-wide",{size:24,strokeWidth:12}),i.a.registerStyle("chicken-scratch-thin",{size:24,strokeWidth:4}),i.a.registerStyle("chicken-scratch-expand",{size:24,letterSpacing:.85,strokeWidth:8}),i.a.registerStyle("chicken-scratch-condense",{size:24,strokeWidth:5,letterSpacing:-.25}),i.a.registerStyle("chicken-scratch-shadow",{size:24,strokeWidth:8,shadowVisibility:!0}),i.a.registerStyle("chicken-scratch-plain",{size:24,maxTranslation:0,maxRotation:0,strokeWidth:2}),i.a.registerStyle("chicken-scratch-small",{size:16,strokeWidth:2,color:"#444"}),i.a.registerStyle("big-red",{maxRotation:10,maxTranslation:.1,size:48,color:"#c66",strokeWidth:10,lineHeight:1.25,letterSpacing:.1,lineCap:"square",shadowVisibility:!0,shadowBlur:8,shadowOffsetX:5,shadowOffsetY:3,shadowColor:"#864"}),i.a.registerStyle("big-orange",{maxRotation:10,maxTranslation:.1,size:48,color:"#ea6",strokeWidth:10,lineHeight:1.25,letterSpacing:.1,lineCap:"square",shadowVisibility:!0,shadowBlur:8,shadowOffsetX:5,shadowOffsetY:3,shadowColor:"#864"}),i.a.registerStyle("big-green",{maxRotation:10,maxTranslation:.1,size:48,color:"#6ea",strokeWidth:10,lineHeight:1.25,letterSpacing:.1,lineCap:"square",shadowVisibility:!0,shadowBlur:8,shadowOffsetX:5,shadowOffsetY:3,shadowColor:"#864"}),i.a.registerStyle("big-purple",{maxRotation:10,maxTranslation:.1,size:48,color:"#a6e",strokeWidth:10,lineHeight:1.25,letterSpacing:.1,lineCap:"square",shadowVisibility:!0,shadowBlur:8,shadowOffsetX:5,shadowOffsetY:3,shadowColor:"#864"}),i.a.registerStyle("cs-red",{size:24,strokeWidth:3,color:"#b44",maxRotation:8,maxTranslation:.05}),i.a.registerStyle("cs-gray",{size:24,strokeWidth:3,color:"#272",maxRotation:8,maxTranslation:.05}),i.a.apply()}]);