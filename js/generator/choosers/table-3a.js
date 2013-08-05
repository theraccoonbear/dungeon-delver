Table3a = Chooser.extend({
	constructor: function() {
		var t = 'd20';
		var o = {
			'1-12': {
				msg: ', 10\' wide ',
			},
			'13-16': {
				msg: ', 20\' wide ',
			},
			'17': {
				msg: ', 30\' wide '
			},
			'18': {
				msg: ', 5\' wide '
			},
			'19-20': {
				msg: ['table-3b']
			}
		};
		
		Table3.super.constructor.call(this, 'Table3a', t, o);
	}
});