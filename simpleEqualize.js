(function ($) {
	"use strict";
	$.fn.simpleEqualize = function (i, l, n, o, r, w, wh) {
		var m = -1,
			t = this,
			e = t;
		w = 'Height';
		r = n = null;
		$.each(arguments, function (k, v) {
			v.big ? v.match(/W|H/) === n ? e = t.find(v) : w = v : r = v;
		});
		wh = w.toLowerCase();
		r ? e[wh]('auto') : n;
		l = e.length;
		for (i = 0; i < l; i++)
			o = e.eq(i)['outer' + w](),
			o > m ? m = o : n;
		e[wh](m);
		return t;
	};
})(jQuery);
