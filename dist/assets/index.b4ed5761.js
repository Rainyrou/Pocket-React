var f={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(r){(function(){var l={}.hasOwnProperty;function s(){for(var n=[],e=0;e<arguments.length;e++){var t=arguments[e];if(!!t){var o=typeof t;if(o==="string"||o==="number")n.push(t);else if(Array.isArray(t)){if(t.length){var c=s.apply(null,t);c&&n.push(c)}}else if(o==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){n.push(t.toString());continue}for(var i in t)l.call(t,i)&&t[i]&&n.push(i)}}}return n.join(" ")}r.exports?(s.default=s,r.exports=s):window.classNames=s})()})(f);var u=f.exports;export{u as c};
