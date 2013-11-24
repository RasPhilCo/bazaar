Products = new Meteor.Collection('products');
paging = false;
if (Meteor.isServer) {
  // Publish our data...
  Meteor.publish("products", function (page, id) {
    if (page == undefined) {
      page = 1;
    }

    if (id) {
      return Products.find(id);
    } else {
      return Products.find({}, {
        limit:10 + (page-1)*6,
        sort:{
          index:1,
        }
      });
    }
  });
}

if (Meteor.isClient) {

  var productsHandle;
  Deps.autorun(function () {
    productsHandle = Meteor.subscribe("products", Session.get("page_num"), Session.get('product_id'));
    paging = false;
  });

  Deps.autorun(function() {
    if (productsHandle.ready()) {
      paging = false;
    }
  })

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
        return p;
      } else {
        return null;
      }
      
    }
  })

  var counter = 0;
  var scrollFunction = function(e) {
    //console.log('SCROLLING');
    if (!paging) {
      
      if (document.body.scrollTop + (3*window.outerHeight) >= document.body.scrollHeight) {
        paging = true
        var page = Session.get('page_num');
        Session.set('page_num', ++page);
        BazaarRouter.navigate('/page/' + page +'/');
      } else {
        //paging = false;
      }
    }
  }

  Template.stream.helpers({
    product: function() {
      var page = Session.get('page_num'),
          page_length = Session.get('page_length');
      return Products.find({});
    },
  });

  Template.stream.created = function() {
    $(document).on('scroll', scrollFunction);
  };

  Template.stream.destroyed = function() {
    $(document).off('scroll');
  }


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


