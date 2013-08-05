Table3a = Chooser.extend({
	constructor: function() {
		var t = 'd20';
		var o = {
			'1-12': {
				msg: ', 10\' wide',
			},
			'3-4': {
				msg: 'turns right 90 degrees',
			},
			'5': {
				msg: 'turns left 45 degrees ahead'
			},
			'6': {
				msg: 'turns right 45 degrees ahead'
			},
			'7': {
				msg: 'turns left 45 degrees backward'
			},
			'8': {
				msg: 'turns right 45 degrees backward'
			},
			'9': {
				msg: 'curves to the left ahead'
			},
			'10': {
				msg: 'curves to the right ahead'
			},
			'11-13': {
				msg: 'forms a "T"'
			},
			'14-15': {
				msg: 'forms a "Y"'
			},
			'16-19': {
				msg: 'forms a 4-way intersection'
			},
			'20': {
				msg: 'forms an "X"'
			},
			
			
		};
		
		Table3.super.constructor.call(this, 'Table3a', t, o);
	}
});