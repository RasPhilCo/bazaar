if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    var data = [
       { 
        "id": "C-011", 
        "imageUrl": "http://cdn.shopify.com/s/files/1/0249/2772/products/project001.josephine.013_shop_1024x1024.jpg?v=1377804546", 
        "name": "Sudan 8 - Photo Print", 
        "description": "8\" x 10\" Photographic Print",
        "link": "http://cameras-test.myshopify.com/collections/photo-prints-all/products/sudan-8-photo-print",
        price:35,
        "creator": {
          "name":"Josephine",
          "location":"St. Bartholomew's Orphanage in South Sudan",
          "short_story":"This photo was taken by Josephine, age 14, from St. Bartholomew's Orphanage in South Sudan. Josephine’s eye for color is phenomenal. She is so in tune with it, you can even see this in her black and white photography. Moreso than the other photographers on this project, Josephine captures the vibrancy of the world around her and uses those colors to such good effect. By purchasing this photo, you will provide lifeline supplies and shelter for kids at St. Bartholomew's.",
          "creator_url": "http://static.squarespace.com/static/51e4be57e4b06f5770c9387f/t/51fdc187e4b0398b363756e0/1375584657608/Josephine001_Name.jpg?format=500w"
        }
    }, 
    { 
        "id": "RG-011", 
        "imageUrl": "http://www.rebuildglobally.org/wp-content/uploads/2012/03/IMG_1718-1751788916-O1.jpg", 
        "name": "John Robert Sandal", 
        "description": "\"Rebuilder\" leather and tire sandals",
        "link": "http://www.rebuildglobally.org/products-page/john-robert/cassandra-sandals/#sthash.GUy0w-GOm.dpuf",
        price:50,
        "creator": {
          "name":"John Robert",
          "location":"Haiti",
          "short_story": "This design is named after our artisan, John Robert. Our mission is to create healthier environments for people in distressed communities by using new and innovative techniques that promote recycling, eco-friendly development, gainful employment, agriculture and education.",
          "creator_url": "http://www.rebuildglobally.org/wp-content/uploads/2012/05/James-and-Adremen-e1363392998461.jpg"        
        }
    },
    { 
        "id": "MC-011", 
        "imageUrl": "http://cdn.shopify.com/s/files/1/0108/0522/products/greentanscarf_grande.jpg?v=1352924284", 
        "name": "Multi-tone Scarf", 
        "snippet": "Some short witty snippet.",
        "link": "http://store.marketcolors.org/collections/frontpage/products/scarf",
        price: 32,
        "creator": {
          "name":"Anastasia",
          "location":"Nairobi, Kenya",
          "short_story":"Anastasia, from Nairobi, Kenya, is one of the craftsmen who make these scarves. With your scarf, you will also receive a product card with additional information about how the craftsman’s life is impacted when you purchase their products.",
          "creator_url": "http://cdn.shopify.com/s/files/1/0108/0522/files/BOHAnanstasiaWanjiru_medium.JPG?139" 
        }
    },
    { 
        "id": "", 
        "imageUrl": "http://cdn.shopify.com/s/files/1/0108/0522/products/square_1_large.jpg?v=1365519701", 
        "name": "Apricot & Cerulean Mod Clutch", 
        "description": "A modern twist to a simple clutch that’s good enough to eat! Whether you’re out on a stroll to your local coffee shop or headed to a cocktail party in your favorite little black dress, with the Apricot and Cerulean Mod Clutch in hand, there's no limit to who you'll impress! Market Colors products are beautiful because they are handmade and unique. When you receive your item, please enjoy any distinctions that differ from that seen online. Magnetic snap closure with decorative metal adornment. Wipe clean. 12\" x 6\"",
        "link": "http://store.marketcolors.org/collections/frontpage/products/apricot-cerulean-mod-clutch",
        price:32, 
        "creator": { 
          "name":"Kenyan Women", 
          "location":"Kenya", 
          "short_story": "This clutch was handmade by a group of refugee women from Nairobi, Kenya. Inside your clutch you will find a product card with additional information about this incredible group.",
          "creator_url": "http://cdn.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117"
        } 
    }, 
    { 
        "id": "", 
        "imageUrl": "http://cdn.shopify.com/s/files/1/0108/0522/products/square_large.jpg?v=1365519231", 
        "name": "Navy & Gold Circuit Clutch", 
        "description": "No wires crossed when it comes to this clutch! The Navy and Gold Circuit Clutch is a fan favorite. With enough room for the essentials and enough glam to spice up your outfit, this clutch will be your greatest fashion ally. Market Colors products are beautiful because they are handmade and unique. When you receive your item, please enjoy any distinctions that differ from that seen online. Magnetic snap closure with decorative metal adornment. Wipe clean. 12\" x 6\"",
        "link": "http://store.marketcolors.org/collections/frontpage/products/navy-gold-circuit-clutch",
        price:32, 
        "creator": { 
          "name":"Kenyan Women", 
          "location":"Kenya", 
          "short_story": "This clutch was handmade by a group of refugee women from Nairobi, Kenya. Inside your clutch you will find a product card with additional information about this incredible group.",
          "creator_url": "http://cdn.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117"
        } 
    }, 
    { 
        "id": "",
          "imageUrl": "http://cdn.shopify.com/s/files/1/0108/0522/products/IMG_3148smaller_grande.jpg?v=1365517783",
        "name": "Periwinkle Chevron Clutch",
        "description": "Planning a night out on the town? You’ll be pretty in periwinkle donning this cute and sassy clutch. Get ready for a night full of compliments because we’re pretty sure that everyone is as obsessed with this bag as we are! Market Colors products are beautiful because they are handmade and unique. When you receive your item, please enjoy any distinctions that differ from that seen online. Magnetic snap closure with decorative metal adornment. Wipe clean. 12\" x 6\"",
        "link": "http://store.marketcolors.org/collections/frontpage/products/periwinkle-chevron-clutch",
        price:32,
        "creator": { 
          "name":"Kenyan Women", 
          "location":"Kenya", 
          "short_story": "This clutch was handmade by a group of refugee women from Nairobi, Kenya. Inside your clutch you will find a product card with additional information about this incredible group.",
          "creator_url": "http://cdn.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117" 
        } 
    }, 
    { 
        "id": "",
        "imageUrl": "http://cdn.shopify.com/s/files/1/0108/0522/products/IMG_3300_grande.jpg?v=1361932930",
        "name": "Foldover Bag", 
        "description": "Which should you bring? A book, camera, cardigan, or your lunch? Lucky for you, the Foldover Bag doesn't make you pick! This gigantic bag can be worn a variety of different ways depending on your adventure or mood. Market Colors products are beautiful because they are handmade and unique. When you receive your item, please enjoy any distinctions that differ from that seen online. Available in burnt orange and distressed blue. Zip closure with pockets. Hand wash. 20″x 17″x 3.5″",
        "link": "http://store.marketcolors.org/collections/frontpage/products/foldover-bag",
        price:57, 
        "creator": { 
          "name":"Kenyan Women",
          "location":"Kenya", 
          "short_story": "This bag was handmade by a group of refugee women from Nairobi, Kenya. Inside your bag you will find a product card with additional information about this incredible group.",
          "creator_url": "http://cdn.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?220" 
        } 
    }, 
    { 
        "id": "", 
        "imageUrl": "http://cdn.shopify.com/s/files/1/0108/0522/products/Screen_Shot_2013-05-31_at_2.49.00_PM_large.png?v=1370026310",
         "name": "Tassel Clutch",
        "description": "It zips, dangles, and is the topic of every conversation! It's the leather Tassel Clutch! This clutch is made with genuine leather and has a slouchy, comfortable look to it. Complete with a Market Colors antique gold medallion hanging from the zipper. Available in brown and black with zip closure. Bag is approximately 9\" L x 12\" W. Tassel is approximately 6\" L. Market Colors products are beautiful because they are handmade and unique. When you receive your item, please enjoy any distinctions that differ from that seen online.", 
        "link": "http://store.marketcolors.org/collections/frontpage/products/tassel-clutch",
        price:47,
        "creator": { 
          "name":"Anastasia",
          "location":"Kenya", 
          "short_story": "Anastasia, from Nairobi, Kenya, is one of the craftsmen who make these clutches. With your clutch, you will also receive a product card with additional information about how the craftsman's life is impacted when you purchase their products.",
          "creator_url": "http://cdn.shopify.com/s/files/1/0108/0522/files/BOHAnanstasiaWanjiru_medium.JPG?139" 
        } 
    }, 
    { 
        "id": "",
        "imageUrl":"http://cdn.shopify.com/s/files/1/0108/0522/products/Market_Color_-_Summer_2013-100_grande.jpg?v=1370546645", 
        "name": "Burlap Envelope Clutch",
        "description": "Special delivery! This is not your ordinary clutch. Casual enough to carry to the mall and clean enough to dress up in your cute little cocktail dress, this envelope clutch will be the chameleon of your wardrobe. Throw in all of the essentials and some non-essentials too! There's plenty of room! Made with burlap with printed cotton interior with leather wrap-around strand. Approximately 8\" L x 12\" W. Leather strand is approximately 35\" L. Market Colors products are beautiful because they are handmade and unique. When you receive your item, please enjoy any distinctions that differ from that seen online.",
        "link": "http://store.marketcolors.org/collections/frontpage/products/white-envelope-clutch",
        price:32, 
        "creator": { 
          "name":"Anastasia",
          "location":"Kenya", 
          "short_story": "Anastasia, from Nairobi, Kenya, is one of the craftsmen who make these clutches. With your clutch, you will also receive a product card with additional information about how the craftsman's life is impacted when you purchase their products.",
          "creator_url": "http://cdn.shopify.com/s/files/1/0108/0522/files/BOHAnanstasiaWanjiru_medium.JPG?139" 
        } 
    }, 

];

    Products.remove({});
    var lastIndex = -1, lastLastIndex = -1;
    for (var i = Products.find().count(); i <= 100; i++) {
      var index = _.random(0,data.length-1);
      if (index == lastIndex || index == lastLastIndex) {
        index++;
         if (index == lastIndex || index == lastLastIndex) {
          index++;
        }
      }
      index = index % data.length;

      Products.insert(data[index]);

      lastLastIndex = lastIndex;
      lastIndex = index;

    };
  });
}