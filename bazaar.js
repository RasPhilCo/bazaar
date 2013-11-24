Products = new Meteor.Collection('products');

if (Meteor.isClient) {


  Template.container.helpers({
    pageIs: function(arg) {
      return Session.equals('view', arg);
    },
    current_product: function() {
      var id = Session.get('product_id');
      if (id) {
        return Products.find(id);
      } else {
        return null;
      }
      
    }
  })

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

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    var data = [
    {
        "age": 0, 
        "id": "image001", 
        "imageUrl": "../img/1.jpg", 
        "name": "Some Camera Thingy", 
        "snippet": "Some short witty snippet.",
        price:85,
        "creator": {
          "name":"Rebecca",
          "location":"Haiti",
          "short_story":"Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends."
        }
    }, 
    {
        "age": 1, 
        "id": "image002", 
        "imageUrl": "../img/2.jpg", 
        "name": "Some Vacation Thingy", 
        "snippet": "Some short witty snippet.",
        price: 20,
        "creator": {
          "name":"Sarah",
          "location":"Nairobi",
          "short_story":"Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
        }
    },
    {
        "age": 2, 
        "id": "image003", 
        "imageUrl": "../img/3.jpg", 
        "name": "Some Fashion Thingy", 
        "snippet": "Some short witty snippet.",
        price: 115,
        "creator": {
          "name":"Lauren",
          "location":"Bangladesh",
          "short_story":"You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.",
        }
    }];

    Products.remove({});
    for (var i = 20; i >= 0; i--) {
      Products.insert(data[i % data.length]);
    };
  });
}
