Table5c = Chooser.extend({
	constructor: function() {
		var t = 'd20';
		var o = {
			'1-5': {
				msg: [', circular', function() {
					var p = die.roll('d20');
					var r = '';
					
					if (p <= 5) {
						r = ' containing a pool';
					} else if (p <= 7) {
						r = ' containing a well';
					} else if (p <= 10) {
						r = ' containing a shaft';
					}
					
					return r;
				}],
			},
			'6-8': {
				msg: ', triangular'
			},
			'9-11': {
				msg: ', trapezoidal'
			},
			'12-13': {
				msg: ', irregularly shaped'
			},
			'14-15': {
				msg: ', oval'
			},
			'16-17': {
				msg: ', hexagonal'
			},
			'18-19': {
				msg: ', octangonal'
			},
			'20': {
				msg: ', a natural cave'
			},
			
			
			
		};
		
		Table5c.super.constructor.call(this, 'Table5c', t, o);
	}
});