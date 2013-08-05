Table2a = Chooser.extend({
	constructor: function() {
		var t = 'd20';
		var o = {
			'1-4': {
				msg: 'a 10\'x10\' room',
			},
			'5-8': {
				msg: 'a passage straight ahead',
			},
			'9-10': {
				msg: ['a passage going 45 degrees ',  function() { return Math.random() > 0.5 ? 'forward': 'backward'}],
			},
			'11-18': {
				msg: ['a room ', 'table-5a'],
			},
			'19-20': {
				msg: ['a chamber ', 'table-5b'],
			}
		};
		
		Table2a.super.constructor.call(this, 'Table2a', t, o);
	}
});