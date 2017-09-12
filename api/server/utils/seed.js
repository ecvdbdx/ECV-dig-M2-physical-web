var mongojs = require('mongojs');
var db = mongojs('gmab_db');
var products = db.collection('products');

products.drop();

const newProducts = [
    {
        name: 'Smarties',
        max_stock: 15,
        current_stock: 5,
        machine_id: 'A25',
        image_url: 'products/smarties.jpg',
        category: 'Bonbons'
    },
    {
        name: 'Balisto',
        max_stock: 15,
        current_stock: 9,
        machine_id: 'A27',
        image_url: 'products/balisto.jpg',
        category: 'Biscuits'
    },
    {
        name: 'Smokehouse Almonds',
        max_stock: 6,
        current_stock: 3,
        machine_id: 'A26',
        image_url: 'products/smokehouse-almonds.jpg',
        category: 'Biscuits'
    },
    {
        name: 'Hépar',
        max_stock: 6,
        current_stock: 6,
        machine_id: 'A57',
        image_url: 'products/hepar.jpg',
        category: 'Boisson'
    },
    {
        name: 'Guinness',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A51',
        image_url: 'products/guinness.png',
        category: 'Boisson'
    },
    {
        name: 'Orange',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A54',
        image_url: 'products/river-orange.jpg',
        category: 'Boisson'
    },
    {
        name: 'Smoothie Pomme/Fraise',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A56',
        image_url: 'products/ikea-apple-strawberry.JPG',
        category: 'Boisson'
    },
    {
        name: 'Smoothie Framboise',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A55',
        image_url: 'products/ikea-raspberry.JPG',
        category: 'Boisson'
    },
    {
        name: 'Choco & Biscuit',
        max_stock: 15,
        current_stock: 5,
        machine_id: 'A23',
        image_url: 'products/chateau-choco.jpg',
        category: 'Bonbons'
    },
    {
        name: 'Mini Brownie',
        max_stock: 15,
        current_stock: 9,
        machine_id: 'A22',
        image_url: 'products/mini-brownie.jpg',
        category: 'Biscuits'
    },
    {
        name: 'Smokehouse Almonds',
        max_stock: 6,
        current_stock: 3,
        machine_id: 'A26',
        image_url: 'products/smokehouse-almonds.jpg',
        category: 'Biscuits'
    },
    {
        name: 'Hépar',
        max_stock: 6,
        current_stock: 6,
        machine_id: 'A57',
        image_url: 'products/hepar.jpg',
        category: 'Boisson'
    },
    {
        name: 'Guinness',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A51',
        image_url: 'products/guinness.png',
        category: 'Boisson'
    },
    {
        name: 'Guinness',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A51',
        image_url: 'products/guinness.png',
        category: 'Boisson'
    },
    {
        name: 'Guinness',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A51',
        image_url: 'products/guinness.png',
        category: 'Boisson'
    },
    {
        name: 'Guinness',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A51',
        image_url: 'products/guinness.png',
        category: 'Boisson'
    },
];

newProducts.forEach((product) => {
    products.save(product);
});
