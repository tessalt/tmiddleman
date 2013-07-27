//= require_tree .

var test = {

	config: {
		test: $("h1")
	},

	init: function() {
		this.config.test.hide();
	}

}

$(document).ready(function(){
	test.init();
});