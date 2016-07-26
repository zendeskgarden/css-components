// jQuery Pseudo
// URL: http://plugins.jquery.com/pseudo
// Source: http://github.com/makesites/jquery-pseudo
//
// Initiated by [Makis Tracend](http://github.com/tracend)
// Distributed by [Makesites.org](http://makesites.org)
// Released under the [MIT license](http://makesites.org/licenses/MIT)

(function (lib) {

	//"use strict";

	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		var deps = ['jquery'];
		define(deps, lib); // give the module a name
	} else if ( typeof module === "object" && module && typeof module.exports === "object" ){
		// Expose as module.exports in loaders that implement CommonJS module pattern.
		module.exports = lib;
	} else {
		// Browser globals
		var Query = window.jQuery; // not supporting other query engines || window.Zepto || window.vQuery;
		lib(Query);
	}
}(function ( $ ){

// main data container
var styles = {};


$.fn.pseudo = function( element, prop, value ) {
	// variables
	var el = this[0];
	var id = "pseudo-styles";
	var changed = false;
	var className = "";
	var sheet = document.getElementById(id) || document.createElement('style');
	var head = document.head || document.getElementsByTagName('head')[0];
	sheet.id = id;

	var has_pseudo_class = ( this.attr('class') && this.attr('class').indexOf('pseudo-style') > -1 );
	if( has_pseudo_class ){
		var classes = this.attr('class');
		// remove classes before
		className = classes.substr( classes.indexOf('pseudo-style') );
		// remove classes after
		className = classes.substr( classes.indexOf(' ')+1 );
		// add / update existing style...
		var selector = className +":"+ element;
		var attributes = {};
		attributes[prop] = value;
		// fallback for the first time...
		if( !styles[ selector ] ) styles[ selector ] = {};
		// check if the styles have changed
		if( styles[ selector ] == attributes ){
			// do nothing...
		} else {
			styles[ selector ] = $.extend({}, styles[ selector ], attributes);
			changed = true;
		}
	} else {
		// generate a new class name
		var className = "pseudo-style" + UID.getNew();
		el.className += ( ( el.className == "" ) ? "" : " ")+ className;
		changed = true; // by definition if we're adding a new class we have a change...
	}

	// if the styles hasn't changed, save a cycle
	if( !changed ) return this;
	// compile stylesheet
	var output = "";
	for( var target in styles ){
		var css = "";
		for( var key in styles[target] ){
			css += key +":"+ styles[target][key] +";";
		}
		output += " ."+ target +" {"+ css +" }";
	}
	sheet.innerHTML = output;
	// append stylesheet
	head.appendChild(sheet);

	return this;

};

// If there is a window object, that at least has a document property
if( typeof window === "object" && typeof window.document === "object" ){
	// save in the global namespace (not needed?)
	window.jQuery = $;
}


// Helpers
var UID = {
	_current: 0,
	getNew: function(){
		this._current++;
		return this._current;
	}
};


}));
