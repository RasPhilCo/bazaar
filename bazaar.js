Products = new Meteor.Collection('products');

if (Meteor.isClient) {

  Session.setDefault('page_num', 1);
  Session.setDefault('page_length', 20);

  Template.container.helpers({
    pageIs: function(arg) {
      return Session.equals('view', arg);
    },
    current_product: function() {
      var id = Session.get('product_id');
      if (id) {
        var p = Products.findOne(id);
        debugger;
        return p;
      } else {
        return null;
      }
      
    }
  })

  var counter = 0;
  Template.stream.helpers({
    product: function() {
      var page = Session.get('page_num'),
          page_length = Session.get('page_length');
      return Products.find({}, {
        skip:Math.max((page - 2)*page_length, 0),
        limit:page_length
      });
    },
    created:function() {
      counter = 0;
    }
  });


  Template.product.helpers({
    leftStory: function() {
      var index;
      var _products = Products.find().fetch();
      for (var i = _products.length - 1; i >= 0; i--) {
        if (_products[i]._id == this._id) {
          index = i;
          break;
        }
      };
      
      return index % 3 == 0;
    },
    rightStory:function() {
      var index;
      var _products = Products.find().fetch();
      for (var i = _products.length - 1; i >= 0; i--) {
        if (_products[i]._id == this._id) {
          index = i;
          break;
        }
      };
      
      return (index+2) % 3 == 0;
    }
  });
}


