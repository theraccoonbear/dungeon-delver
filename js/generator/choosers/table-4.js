Table4 = Chooser.extend({
	constructor: function() {
		var t = 'd20';
		var o = {
			'1-8': {
				msg: 'left 90 degrees',
			},
			'9': {
				msg: 'left 45 degrees ahead',
			},
			'10': {
				msg: 'left 45 degrees behind'
			},
			'11-18': {
				msg: 'right 90 degrees'
			},
			'19': {
				msg: 'right 45 degrees ahead'
			},
			'20': {
				msg: 'right 45 degrees behind'
			}
		};
		
		Table4.super.constructor.call(this, 'Table4', t, o);
	}
});