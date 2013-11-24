if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    var data = [
    { 
        "id": "C-011", 
        "imageUrl": "http://cdn.shopify.com/s/files/1/0249/2772/products/projec1.josephine.013_shop_1024x1024.jpg?v=1377804546", 
        "name": "Sudan 8 - Photo Print", 
        "description": "8\" x 10\" Photographic Print",
        "link": "http://cameras-test.myshopify.com/collections/photo-prints-all/products/sudan-8-photo-print",
        price:35,
        "creator": {
          "name":"Josephine",
          "location":"St. Bartholomew's Orphanage in South Sudan",
          "short_story":"This photo was taken by Josephine, age 14, from St. Bartholomew's Orphanage in South Sudan. Josephine’s eye for color is phenomenal. She is so in tune with it, you can even see this in her black and white photography. Moreso than the other photographers on this project, Josephine captures the vibrancy of the world around her and uses those colors to such good effect. By purchasing this photo, you will provide lifeline supplies and shelter for kids at St. Bartholomew's."
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
          "short_story": "This design is named after our artisan, John Robert. Our mission is to create healthier environments for people in distressed communities by using new and innovative techniques that promote recycling, eco-friendly development, gainful employment, agriculture and education."
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
        }
    },
    { 
        "id": "", 
        "imageUrl": "http://.shopify.com/s/files/1/0108/0522/products/square_grande.jpg?v=1365519231", 
        "name": "Navy & Gold Circuit Clutch", 
        "description": "No wires crossed when it comes to this clutch! The Navy and Gold Circuit Clutch is a fan favorite. With enough room for the essentials and enough glam to spice up your outfit, this clutch will be your greatest fashion ally.", 
        "link": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
        price:32, 
        "creator": { 
          "name":"", 
          "location":"Kenya", 
          "short_story": "This clutch was handmade by a group of refugee women from Nairobi, Kenya. Inside your clutch you will find a product card with additional information about this incredible group.",
        } 
    }, 
    { 
        "id": "",
          "imageUrl": "http://.shopify.com/s/files/1/0108/0522/products/clutch_1_grande.jpg?v=1365516792",
        "name": "Periwinkle Chevron Clutchl",
        "description": "Planning a night out on the town? You’ll be pretty in periwinkle donning this cute and sassy clutch. Get ready for a night full of compliments because we’re pretty sure that everyone is as obsessed with this bag as we are!",
        "link": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
        price:32,
        "creator": { 
          "name":"", 
          "location":"Kenya", 
          "short_story": "This clutch was handmade by a group of refugee women from Nairobi, Kenya. Inside your clutch you will find a product card with additional information about this incredible group.",
          "creator_url": "http://cdn.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117" 
        } 
    }, 
    { 
        "id": "",
        "imageUrl": "http://cdn.shopify.com/s/files/1/0108/0522/products/Foldoversquare_grande.jpg?v=1361923390",
        "name": "Foldover Bag", 
        "description": "Which should you bring? A book, camera, cardigan, or your lunch? Lucky for you, the Foldover Bag doesn't make you pick! This gigantic bag can be worn a variety of different ways depending on your adventure or mood.",
        "link": "http://cdn.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
        price:57, 
        "creator": { 
          "name":"",
          "location":"Which should you bring? A book, camera, cardigan, or your lunch? Lucky for you, the Foldover Bag doesn't make you pick! This gigantic bag can be worn a variety of different ways depending on your adventure or mood.", 
          "short_story": "This bag was handmade by a group of refugee women from Nairobi, Kenya. Inside your bag you will find a product card with additional information about this incredible group.",
          "creator_url": "http://cdn.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?220" 
        } 
    }, 
    { 
        "id": "", 
        "imageUrl": "http://cdn.shopify.com/s/files/1/0108/0522/products/Screen_Shot_2013-05-31_at_2.49_PM_grande.png?v=1326310",
         "name": "Tassel Clutch",
         "description": "Kenya", 
        "link": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
        price:47,
        "creator": { 
          "name":"",
          "location":"Kenya", 
          "short_story": 
          "Market Colors products are beautiful because they are handmade and unique. When you receive your item, please enjoy any distinctions that differ from that seen online.",
         "creator_url": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?220" 
        } 
    }, 
    { 
        "id": "",
        "imageUrl":"http://cdn.shopify.com/s/files/1/0108/0522/products/whiteclutch2_grande.jpg?v=1370550667", 
        "name": "Burlap Envelope Clutchl",
        "description": "Kenya", 
        "link": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
        price:32, 
        "creator": { 
          "name":"",
          "location":"Kenya", 
          "short_story": "",
          "creator_url":"cdn.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?220" 
        } 
    }, 
    { 
        "id": "", 
        "imageUrl": "http://.shopify.com/s/files/1/0108/0522/products/DSC_0275_grande.jpg?v=1347158965", "name": "Fabric Pouchlettel",
        "description": "Malawi",
        "link": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
        price:5,
        "creator": { 
          "name":"", 
          "location":"Malawi", 
          "short_story": "Inside your pouchlette you will find a product card with information about the craftsmen from Lilongwe, Malawi who made your item.",
          "creator_url":"LINK" 
        } 
    }, 
    { 
        "id": "",
        "imageUrl": "http://.shopify.com/s/files/1/0108/0522/products/yogabag_grande.jpg?v=1371157790",
        "name": "Printed Yoga Bagl", "description": "Kenya", 
        "link": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
         price:32,
        "creator": { 
         "name":"", 
         "location":"Kenya",
         "short_story": "",
         "creator_url":"LINK" 
        } 
    }, 
    { 
        "id": "", 
        "imageUrl": "http://.shopify.com/s/files/1/0108/0522/products/ipadsatchel_grande.jpg?v=1352923936", 
        "name": "Kenya iPad Carrierl", "description": "Kenya", 
        "link": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
        price:17, 
        "creator": { 
          "name":"", 
          "location":"Kenya", 
          "short_story": "",
          "creator_url":"LINK" 
        } 
    }, 
    { 
        "id": "", 
        "imageUrl": "http://.shopify.com/s/files/1/0108/0522/products/sunburst_grande.jpg?v=1370546726", 
        "name": "Sunburst Carrierl", "description": "Kenya",
        "link": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
        price:25,
        "creator": {
          "name":"",
          "location":"Kenya",
          "short_story": "Market Colors products are beautiful because they are handmade and unique. When you receive your item, please enjoy any distinctions that differ from that seen online.",
          "creator_url":"LINK" 
        } 
    }, 
    { 
        "id": "",
        "imageUrl": "http://.shopify.com/s/files/1/0108/0522/products/coralnecklace_grande.jpg?v=1370464594",
          "name": "CARDONE Blush Necklacel", "description": "Kenya", 
        "link": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
        price:22,
        "creator": { 
          "name":"", 
          "location":"Kenya",
          "short_story": "Market Colors products are beautiful because they are handmade and unique. When you receive your item, please enjoy any distinctions that differ from that seen online.",
        "creator_url":"LINK" 
        } 
    }, 
    { 
        "id": "", 
        "imageUrl": "http://.shopify.com/s/files/1/0108/0522/products/coralbracelet_grande.jpg?v=1370547546",
        "name": "CARDONE Blush Braceletl", "description": "Uganda", 
        "link": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
        price:15, 
        "creator": { 
          "name":"", 
          "location":"Uganda",
          "short_story": "",
          "creator_url":"LINK" 
        } 
    }, 
    { 
        "id": "", 
        "imageUrl": "http://.shopify.com/s/files/1/0108/0522/products/bluenecklace_grande.jpg?v=1370525747", "name": "Namibia Necklacel", "description": "",
        "link": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
        price:20, 
        "creator": {
          "name":"", 
          "location":"",
          "short_story": "",
          "creator_url":"LINK" 
        } 
    }, 
    { 
        "id": "", 
        "imageUrl": "http://.shopify.com/s/files/1/0108/0522/products/dangle_grande.jpg?v=1370571393",
        "name": "Colorblock Dangle Braceletl",
        "description": "",
        "link": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
        price:15,
        "creator": { 
          "name":"",
          "location":"",
          "short_story": "Market Colors products are beautiful because they are handmade and unique. When you receive your item, please enjoy any distinctions that differ from that seen online.",
        "creator_url":"LINK" 
        } 
    }, 
    { 
        "id": "",
        "imageUrl": "http://.shopify.com/s/files/1/0108/0522/products/ribbon_grande.jpg?v=1370565873",
        "name": "Beaded Ribbon Bracelet", 
        "description": "Namibia", 
        "link": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
        price:15, 
        "creator": { 
          "name":"", 
          "location":"Namibia", 
          "short_story": "Toggle closure. 8\" x 1\"",
          "creator_url":"LINK" 
        } 
    }, 
    { 
        "id": "",
        "imageUrl": "http://.shopify.com/s/files/1/0108/0522/products/headband_2_grande.jpg?v=1370464652",
        "name": "Flower Headband",
        "description": "Kenya", 
        "link": "http://.shopify.com/s/files/1/0108/0522/files/photo_1_medium.JPG?117",
        price:12,
        "creator": { 
            "name":"",
          "location":"Kenya",
            "short_story": "",
            "creator_url":"LINK" 
        } 
    }, 
    { 
        "id": "",
        "imageUrl": "http://www.rebuildglobally.org/wp-content/uploads/2012/09/IMG_0676-1024x916.jpg",
        "name": "Betty", 
        "description": "\"Rebuilder\" leather and tire sandals are made by Haitian earthquake survivors now employed as artisans. This design is named after our artisan, Betty. Proceeds from the sales of Rebuilder Sandals support the expansion of the Rebuild shop as well as development of the other Rebuild Globally programs and initiatives. Our mission is to create healthier environments for people in distressed communities by using new and innovative techniques that promote recycling, eco-friendly development, gainful employment, agriculture and education.", 
        "link": "${productURL}", 
        price:50, 
        "creator": { 
          "name":"Betty",
          "location":"Port-Au-Prince, Haiti",
          "short_story": "STORY",
          "creator_url":"Artist image" 
        } 
    }, 
    { 
        "id": "",
        "imageUrl": "http://www.rebuildglobally.org/wp-content/uploads/2012/03/IMG_0688-928x1024.jpg",
        "name": "Donald", 
        "description": "\"Rebuilder\" leather and tire sandals are made by Haitian earthquake survivors now employed as artisans. This design is named after our artisan, Donald. Our mission is to create healthier environments for people in distressed communities by using new and innovative techniques that promote recycling, eco-friendly development, gainful employment, agriculture and education. Find out more at RebuildGlobally.org", 
        "link": "${productURL}", 
        price:50, "creator": { 
          "name":"Donald",
          "location":"Port-Au-Prince, Haiti", 
          "short_story": "STORY",
          "creator_url":"Artist image" 
        } 
    }, 
    { 
        "id": "",
        "imageUrl": "http://www.rebuildglobally.org/wp-content/uploads/2012/03/IMG_0693-3x1024.jpg", 
        "name": "Jolina", 
        "description": "\"Rebuilder\" leather and tire sandals are made by Haitian earthquake survivors now employed as artisans. This design is named after our artisan, Jolina. Our mission is to create healthier environments for people in distressed communities by using new and innovative techniques that promote recycling, eco-friendly development, gainful employment, agriculture and education. Find out more at RebuildGlobally.org",
        "link": "${productURL}",
        price:50, 
        "creator": { 
          "name":"Jolina",
          "location":"Port-Au-Prince, Haiti", 
          "short_story": "STORY",
          "creator_url":"Artist image" 
        } 
    }, 
    { 
        "id": "",
        "imageUrl": "http://www.rebuildglobally.org/wp-content/uploads/2012/03/IMG_0683-938x1024.jpg",
        "name": "Ody",
        "description": "\"Rebuilder\" leather and tire sandals are made by Haitian earthquake survivors now employed as artisans. This men's design is named after our artisan, Ody. Proceeds from the sales of Rebuilder Sandals support the expansion of the Rebuild shop as well as development of the other Rebuild Globally programs and initiatives. Our mission is to create healthier environments for people in distressed communities by using new and innovative techniques that promote recycling, eco-friendly development, gainful employment, agriculture and education.",
        "link": "${productURL}", 
        price:50, 
        "creator": { 
          "name":"Ody", 
          "location":"Port-Au-Prince, Haiti", 
          "short_story": "STORY",
          "creator_url":"Artist image" 
        } 
    }, 
    { 
        "id": "", 
        "imageUrl": "http://www.rebuildglobally.org/wp-content/uploads/2012/03/IMG_3366-684x1024.jpg", 
        "name": "Jesselie",
        "description": "\"Rebuilder\" leather and tire sandals are made by Haitian earthquake survivors now employed as artisans. This design is named after our artisan, Jesselie. Proceeds from the sales of Rebuilder Sandals support the expansion of the Rebuild shop as well as development of the other Rebuild Globally programs and initiatives. Our mission is to create healthier environments for people in distressed communities by using new and innovative techniques that promote recycling, eco-friendly development, gainful employment, agriculture and education.",
        "link": "${productURL}",
        price:50,
        "creator": { 
          "name":"Jesselie",
          "location":"Port-Au-Prince, Haiti", 
          "short_story": "STORY",
          "creator_url":"Artist image" 
        } 
    } 

];

    Products.remove({});
    for (var i = 20; i >= 0; i--) {
      Products.insert(data[i % data.length]);
    };
  });
}