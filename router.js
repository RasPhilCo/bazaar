if (Meteor.isClient) {
	Session.setDefault('view', 'loading');

	var myRouter = Backbone.Router.extend({
		routes: {
			"product/:pid/":"product",
			'page/:num/':'home',
			'/':'home',
			'':'home'
		},

		home: function(page_num) {
			Session.set('product_id', null)
			Session.set('view', 'home');
			Session.set('page_num', page_num ? page_num : 1);
		},

		product: function(product_id) {
			Session.set('view', 'product');
			Session.set('product_id', product_id);
		}

	});

	BazaarRouter = new myRouter();

	Meteor.startup(function(){

		if (Backbone.history.start({pushState:true})) {

		} else {

		}
	})
}