var Dungeon = Class.extend({
	constructor: function() {
		//this.tables = {};
		//this.tables.table1 = new Table1();
	},
	
	start: function() {
		console.log('~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=');
		var r = choosers.choosers['Table1'].getResult();
		//var r = choosers.choosers['Table1'].getOption(15);
		//var r = choosers.choosers['Table5a'].getOption(19);
		console.log(r);
	}
	
	
});