Table2 = Chooser.extend({
	constructor: function() {
		var t = 'd20';
		var o = {
			'1-6': {
				msg: ['to the left, beyond is ', 'table-2a']
			},
			'7-12': {
				msg: ['to the right, beyond is ', 'table-2a'],
			},
			'13-20': {
				msg: ['ahead, beyond is ', 'table-2a'],
			}
		};
		
		Table2.super.constructor.call(this, 'Table2', t, o);
	}
});