Object.prototype.isNumber = function() {
	var n = this;
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var Init = Class.extend({
	head: null,
	toLoad: [],
	loadIdx: -1,
	
	fetchNextScript: function() {
		this.loadIdx++;
		if (this.toLoad.length > this.loadIdx) {
			
			var ctxt = this;
			var nxt = this.toLoad[this.loadIdx];
			var alpha = nxt.a;
			var path = nxt.p;
			
			alpha = typeof alpha === 'undefined' ? false : alpha;
			var fullPath = path + (alpha === false ? '' : String.fromCharCode(alpha));
			var url = 'js/generator/choosers/table-' + fullPath + '.js';
			
			//console.log("Loading " + this.loadIdx + ' / ' + fullPath);
			//return;
			
			$.ajax({
				url: url,
				dataType: 'text',
				statusCode: {
					200: function(code, status) {
						eval(code);
						
						var className = 'Table' + fullPath;
						console.log("Loaded " + className);
						
						choosers.add(className);
						
						alpha = alpha === false ? 97 : alpha + 1;
						if (alpha < 110) {
							ctxt.addScript(path, alpha, true);	
						}
						ctxt.fetchNextScript();
					},
					404: function(a, b, c) {
						//console.log('ERROR: ' +  fullPath);
						ctxt.fetchNextScript();
					}
				},
				fail: function(jqxhr, settings, exception) {
					//console.log("Triggered ajaxError handler.");
				},
				async: false
			});
		}
	},
	
	addScript: function(path, alpha, pre) {
		var ctxt = this;
		alpha = typeof alpha === 'undefined' ? false : alpha;
		pre = pre === true ? true : false;
		
		if (pre) {
			this.toLoad.splice(this.loadIdx + 1, 0, {p: path, a: alpha});
		} else {
			this.toLoad.push({p: path, a: alpha});
		}
	},
	
	constructor: function() {
		this.head= document.getElementsByTagName('head')[0];
		
		$.ajaxSetup({
			cache: true
		});
	},
	
	go: function(opt) {
		
		var o = {
			
		};
		
		$.extend(o, opt);
		
		for (var i = 1; i < 10; i++) {
			var scr = i;
			this.addScript(scr);			
		}
		
		this.fetchNextScript();
		
		if (typeof o.done === 'function') {
			o.done();
		}
	}
	
});