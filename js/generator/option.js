var Option = Class.extend({
	tableRgx: /^table-(\d+)([a-z])?$/,
	msg: ['[missing]'],
	after: false,
	val: 0,
	
	constructor: function(o) {
		if (typeof o.msg === 'string') {
			this.msg = [o.msg];
		} else if (typeof o.msg === 'object' && o.msg.length) {
			this.msg = o.msg;
		}
	},
	
	getMessage: function(type) {
		var m = '[missing]';
		type = typeof type === 'undefined' ? 'msg' : type;
		
		if (this[type].length > 0) {
			m = '';
			for (var i = 0; i < this[type].length; i++) {
				var mpt = this.msg[i];
				
				if (typeof mpt === 'function') {
					mpt = mpt();
				}
				
				if (this.tableRgx.test(mpt)) {
					var matched = this.tableRgx.exec(mpt);
					var className = 'Table' + matched[1] + (typeof matched[2] !== 'undefined' ? matched[2] : '');
					if (typeof window[className] !== 'undefined') {
						m += choosers.choosers[className].getResult();
					} else {
						m += ' *** Class ' + className + ' Not Found *** ';
					}
				} else {
					m += mpt;
				}
			}
		}
		
		return m;
	}
});