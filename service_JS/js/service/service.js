/*jslint white:true */
/*global angular */
/*global someFunction */

myCart.service("loadimg",function() {
    "use strict";
    return [
            {'name': 'Mens Jacket',
                'price': 2500,
                'availability': 5,
                'image': "assets/jacket.jpg"},
            {'name': 'Ladies Jacket',
                'price': 1500,
                'availability': 5,
                'image': "assets/jacket1.jpg"},
            {'name': 'Travel Bag Backpack',
                'price': 3000,
                'availability': 8,
                'image': "assets/bag.jpg"},
            {'name': 'Travel Bag',
                'price': 2750,
                'availability': 9,
                'image': "assets/bag1.jpg"},
            {'name': 'Mens Shoe',
                'price': 2000,
                'availability': 10,
                'image': "assets/footware.jpg"},
            {'name': 'Ladies Shoe',
                'price': 1750,
                'availability': 10,
                'image': "assets/footware1.jpg"},
            {'name': 'Canon SLR',
                'price': 19000,
                'availability': 6,
                'image': "assets/camera.jpg"},
            {'name': 'FastTrack Sunglasses',
                'price': 1000,
                'availability': 15,
                'image': "assets/sunglasses.jpg"},
            {'name': 'Acer Laptop',
                'price': 35000,
                'availability': 7,
                'image': "assets/laptop.jpg"}
        ]; 
    
});

