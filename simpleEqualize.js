(function ($) {
	"use strict";
	$.fn.simpleEqualize = function (i,o,r,w,wh,m,t,e) {
		m = -1;
		e = t = this;
		w = 'Height';
		r = 0;
		$.each(arguments, function (k, v) {
			v.big ? /W|H/.test(v) ? w = v : e = t.find(v) : r = v;
		});
		wh = w.toLowerCase();
		r ? e[wh]('auto') : 0;
		for (i = e.length;i--;)
			o = e.eq(i)['outer' + w](),
			o > m ? m = o : 0;
		e[wh](m);
		return t;
	};
})(jQuery);