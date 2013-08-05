var Dice = Class.extend({
	constructor: function() {
		
	},
	
	roll: function(a, b) {//qty, type) {
		var qty = 1;
		var type;
		
		if (typeof b !== 'undefined') {
			type = b;
		} else {
			type = a;
		}
		
		type = type.replace(/[^\d]+/, '');
		var total = 0;
		
		if (qty > 0) {
			for (i = 0; i < qty; i++) {
				var roll = Math.floor(Math.random() * type) + 1;
				total += roll;
			}
		}
		
		return total;
		
	}
});