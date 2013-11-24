Products = new Meteor.Collection('products');


if (Meteor.isClient) {

  var counter = 0;
  Template.stream.helpers({
    product: function() {
      return Products.find();
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
  })
}


