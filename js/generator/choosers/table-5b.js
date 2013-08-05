Table5b = Chooser.extend({
	constructor: function() {
		var t = 'd20';
		var o = {
			'1-2': {
				msg: ['square, 10\' x 10\''],
			},
			'3-4': {
				msg: ['square, 20\' x 20\''],
			},
			'5-6': {
				msg: ['square, 30\' x 30\''],
			},
			'7-8': {
				msg: ['square, 40\' x 40\''],
			},
			'9-10': {
				msg: ['rectangular, 10\' x 20\''],
			},
			'11-13': {
				msg: ['rectangular, 20\' x 30\''],
			},
			'14-15': {
				msg: ['rectangular, 20\' x 40\''],
			},
			'16-17': {
				msg: ['rectangular, 30\' x 40\''],
			},
			'18-20': {
				msg: ['of unusual shape and size', 'table-5c', 'table-5d'],
			},
			
		};
		
		Table5b.super.constructor.call(this, 'Table5b', t, o);
	}
});