Table5d = Chooser.extend({
	constructor: function() {
		var ctxt = this;
		
		var t = 'd20';
		var o = {
			'1-3': {
				msg: [', about 500 sq. ft.'],
				val: 500
			},
			'4-6': {
				msg: [', about 900 sq. ft.'],
				val: 900
			},
			'7-8': {
				msg: [', about 1,300 sq. ft.'],
				val: 1300
			},
			'9-10': {
				msg: [', about 2,000 sq. ft.'],
				val: 2000
			},
			'11-12': {
				msg: [', about 2,700 sq. ft.'],
				val: 2700
			},
			'13-14': {
				msg: [', about 3,400 sq. ft.'],
				val: 3400
			},
			'15-20': {
				msg: [function() {
					return ', really big';
					//x = new Table5d();
					//console.log(ctxt.getResult());
					//return 'xxxxx';
					//return ', about ' + (2000 + choosers.chooser['Table5d'].getResult('val')) + ' sq. ft.';
				}],
				val: 999999
			}
		};
		
		Table5d.super.constructor.call(this, 'Table5d', t, o);
	}
});