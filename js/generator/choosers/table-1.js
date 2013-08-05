Table1 = Chooser.extend({
	constructor: function() {
		var t = 'd20';
		var o = {
			'1-2': {
				msg: 'The passage continues 60\' ahead',
			},
			'3-5': {
				msg: ['The passage ends at a door ', 'table-2'],
			},
			'6-10': {
				msg: ['You\'re in a passage which has a side passage that ', 'table-3'],
			},
			'11-13': {
				msg: ['You\'re in a ', 'table-4', 'table-3']
			},
			'14-16': {
				msg: ['You enter a chamber ', 'table-5a']
			},
			'17': {
				msg: ['You encounter a set of stairs ', 'table-6']
			},
			'18': {
				msg: ['You find yourself at a dead end.'],
				after: function() { return Math.random() < 0.5 ? 'table-5a' : 'table-5b'; }
			},
			'19': {
				msg: ['You trigger a trap!', 'table-7']
			},
			'20': {
				msg: ['You encounter a wandering monster ', 'table-10']
			}
		};
		
		
		
		Table1.super.constructor.call(this, 'Table1', t, o);
	}
});