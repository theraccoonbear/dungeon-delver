Table5a = Chooser.extend({
	constructor: function() {
		var t = 'd20';
		var o = {
			'1-4': {
				msg: [', square, 20\' x 20\''],
			},
			'5-6': {
				msg: [', square, 30\' x 30\''],
			},
			'7-8': {
				msg: [', square, 40\' x 40\''],
			},
			'9-13': {
				msg: [', rectangular, 20\' x 30\''],
			},
			'14-15': {
				msg: [', rectangular, 30\' x 50\''],
			},
			'16-17': {
				msg: [', rectangular, 40\' x 60\''],
			},
			'18-20': {
				msg: [' of unusual shape and size', 'table-5c', 'table-5d'],
			},
		};
		
		Table5a.super.constructor.call(this, 'Table5a', t, o);
	}
});