Table3b = Chooser.extend({
	stream: function() {
		return Math.random() <= 0.75 ? 'with a bridge' : 'that is impassible';
	},
	
	river: function() {
		var x = Math.random();
		var r = '';
		
		if (x <= 0.5) {
			r = 'with a bridge';
		} else if (x <= 0.75) {
			r = 'with a boat on ' + (Math.random < 0.5 ? 'your' : 'the opposite') + ' bank';
		} else {
			r = 'which is impassible';
		}
		
		return r;
	},
	
	chasm: function() {
		var x = Math.random();
		var r = '';
		
		if (x <= 0.50) {
			r = 'with a bridge';
		} else if (x <= 0.75) {
			r = 'with a jumping point about ' + (Math.random() < 0.5 ? '5' : '10') + '\' wide';
		} else {
			r = 'which is impassible';
		}
		
		return r;
	},
	
	constructor: function() {
		var t = 'd20';
		var o = {
			'1-4': {
				msg: ', 40\' wide with columns down the center which then ',
			},
			'5-7': {
				msg: ', 40\' wide with a two rows of columns which then ',
			},
			'8-10': {
				msg: ', 50\' wide with columns down the center which then ',
			},
			'11-12': {
				msg: ', 50\' wide with two rows of columns which then ',
			},
			'13-15': {
				msg: [' runs into a 10\' wide stream ', this.stream, ', beyond, the passage '],
			},
			'16-17': {
				msg: [' runs into a 20\' wide river ', this.river, ', beyond, the passage '],
			},
			'18': {
				msg: [' runs into a 40\' wide river ', this.river, ', beyond, the passage ']
			},
			'19': {
				msg: [' runs into a 60\' wide river ', this.river, ', beyond, the passage ']
			},
			'20': {
				msg: [' runs into a 20\' wide chasm ', this.chasm, ', beyond, the passage ']
			},
			
		};
		
		Table3b.super.constructor.call(this, 'Table3b', t, o);
	}
});