var mongojs = require('mongojs');
var db = mongojs('gmab_db');
var products = db.collection('products');

products.drop();

const newProducts = [
    {
        name: 'Smarties',
        max_stock: 15,
        current_stock: 5,
        machine_id: 'A21',
        image_url: 'static/products/smarties.jpg'
    },
    {
        name: 'Balisto',
        max_stock: 15,
        current_stock: 9,
        machine_id: 'A22',
        image_url: 'static/products/balisto.jpg'
    },
    {
        name: 'Smokehouse Almonds',
        max_stock: 6,
        current_stock: 3,
        machine_id: 'A23',
        image_url: 'static/products/smokehouse-almonds.jpg'
    },
    {
        name: 'Hépar',
        max_stock: 6,
        current_stock: 6,
        machine_id: 'A24',
        image_url: 'static/products/hepar.jpg'
    },
    {
        name: 'Guinness',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A25',
        image_url: 'static/products/guinness.png'
    },
    {
        name: 'Orange',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A26',
        image_url: 'static/products/river-orange.jpg'
    },
    {
        name: 'Smoothie Pomme/Fraise',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A27',
        image_url: 'static/products/ikea-apple-strawberry.JPG'
    },
    {
        name: 'Smoothie Framboise',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A28',
        image_url: 'static/products/ikea-raspberry.JPG'
    },
    {
        name: 'Choco & Biscuit',
        max_stock: 15,
        current_stock: 5,
        machine_id: 'A51',
        image_url: 'static/products/chateau-choco.jpg'
    },
    {
        name: 'Mini Brownie',
        max_stock: 15,
        current_stock: 9,
        machine_id: 'A52',
        image_url: 'static/products/mini-brownie.jpg'
    },
    {
        name: 'Smokehouse Almonds',
        max_stock: 6,
        current_stock: 3,
        machine_id: 'A53',
        image_url: 'static/products/smokehouse-almonds.jpg'
    },
    {
        name: 'Hépar',
        max_stock: 6,
        current_stock: 6,
        machine_id: 'A54',
        image_url: 'static/products/hepar.jpg'
    },
    {
        name: 'Guinness',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A55',
        image_url: 'static/products/guinness.png'
    },
    {
        name: 'Guinness',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A56',
        image_url: 'static/products/guinness.png'
    },
    {
        name: 'Guinness',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A57',
        image_url: 'static/products/guinness.png'
    },
    {
        name: 'Guinness',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A58',
        image_url: 'static/products/guinness.png'
    },
];

newProducts.forEach((product) => {
    products.save(product);
});
