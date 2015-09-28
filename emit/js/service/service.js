myCart.service("loadimg", function () {
    "use strict";
    this.items = [
        {'name': 'Mens Jacket',
                'price': 2500,
                'availability': 5,
                'image': "assets/images/jacket.jpg"},
        {'name': 'Ladies Jacket',
                'price': 1500,
                'availability': 5,
                'image': "assets/images/jacket1.jpg"},
        {'name': 'Travel Bag Backpack',
                'price': 3000,
                'availability': 8,
                'image': "assets/images/bag.jpg"},
        {'name': 'Travel Bag',
                'price': 2750,
                'availability': 9,
                'image': "assets/images/bag1.jpg"},
        {'name': 'Mens Shoe',
                'price': 2000,
                'availability': 10,
                'image': "assets/images/footware.jpg"},
        {'name': 'Ladies Shoe',
                'price': 1750,
                'availability': 10,
                'image': "assets/images/footware1.jpg"},
        {'name': 'Canon SLR',
                'price': 19000,
                'availability': 6,
                'image': "assets/images/camera.jpg"},
        {'name': 'FastTrack Sunglasses',
                'price': 1000,
                'availability': 15,
                'image': "assets/images/sunglasses.jpg"},
        {'name': 'Acer Laptop',
                'price': 35000,
                'availability': 7,
                'image': "assets/images/laptop.jpg"}
    ]; 
    this.itemClicked = "";

});
    
