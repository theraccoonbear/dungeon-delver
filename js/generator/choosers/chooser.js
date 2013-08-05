Chooser = Class.extend({
	type: 'd20',
	name: 'Unnamed',
	choosers: {},
	
	singleRgx: /^(\d+)$/,
	upperLowerRgx: /^(\d+)-(\d+)$/,

	
	buildOpt: function(range, rest) {
		//console.log(range.join(', '));
		for (var i = 0; i < range.length; i++) {
			var idx = range[i];
			this.options[idx] = new Option(rest);
		}
	},
	
	add: function(name) {
		var classRef = window[name];
		//console.log(classRef);
		if (typeof classRef === 'function') {
			var inst = new classRef();
			
			this.choosers[name] = inst;		
		} else {
			console.log('Couldn\'t instantiate ' + name + '!');
		}
		
	},
	
	constructor: function(n, t, o) {
		this.initer(n, t, o);
	},
	
	initer: function(n, t, o) {
		this.name = n;
		this.type = t;
		this.options = [];
		
		for (var opt in o) {
			if (o.hasOwnProperty(opt)) {
				var lower = false;
				var upper = false;
				
				if (this.upperLowerRgx.test(opt)) {
					var matches = this.upperLowerRgx.exec(opt);
					var lower = Math.min(matches[1], matches[2]);
					var upper = Math.max(matches[1], matches[2]);
					gotIt = true;
				} else if (this.singleRgx.test(opt)) {
					var matches = this.singleRgx.exec(opt);
					var lower = matches[1];
					var upper = matches[1];
				}
				
				if (lower && upper) {
					var range = [];
					for (i = lower; i <= upper; i++) {
						range.push(i);
					}
					
					this.buildOpt(range, o[opt]);
				}
				
			}
		}
		//this.options = o;
	},
	
	getOption: function(i, t) {
		if (typeof this.options[i] !== 'undefined') {
			return this.options[i].getMessage(t);
		} else {
			return '[nooooooo]';
		}
	},
	
	getResult: function(t) {
		var r = die.roll(this.type);
		//console.log("Rolled " + r + ' for ' + this.name);
		//console.log(this.options[r]);
		//return this.name + '=(' + this.getOption(r) + ')';
		return this.getOption(r, t);
		
		//console.log('Result!');
	}
	
});