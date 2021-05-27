
// source ./UMD.js
(function(factory){
	
	var _name = 'alot',
		_global = typeof window === 'undefined' ? global : window,
		_module = {
			exports: {}
		};

	factory(_module, _module.exports, _global);

	if (typeof define === 'function' && define.amd) {
        define([], function () {
        	return _module.exports;
        });
        return;
    } 
    if (typeof module === 'object' && module.exports) {
    	module.exports = _module.exports;
    	return;
    }

	if (_name) {
		_global[_name] = _module.exports;
	}

}(function(module, exports, global){
	"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatherAttr = void 0;
exports.FeatherAttr = function (node, key, model, ctx, element) {
    var elementAttrs = node.attr;
    var name = elementAttrs['data-feather'];
    var svgString = feather.icons[name].toSvg(__assign(__assign({}, elementAttrs), { class: elementAttrs.class }));
    var svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
    var svgElement = svgDocument.querySelector('svg');
    element.parentNode.replaceChild(svgElement, element);
};
mask.registerAttrHandler('data-feather', 'client', exports.FeatherAttr);

}));
// end:source ./UMD.js
