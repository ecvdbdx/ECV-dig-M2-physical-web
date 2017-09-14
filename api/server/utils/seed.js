var mongojs = require('mongojs');
var db = mongojs('gmab_db');
var products = db.collection('products');

products.drop();

const newProducts = [
    {
        name: 'A12',
        max_stock: 15,
        current_stock: 5,
        machine_id: 'A12',
        image_url: 'products/smarties.jpg',
        category: 'Bonbons'
    },
    {
        name: 'A13',
        max_stock: 15,
        current_stock: 9,
        machine_id: 'A13',
        image_url: 'products/balisto.jpg',
        category: 'Biscuits'
    },
    {
        name: 'A14',
        max_stock: 6,
        current_stock: 3,
        machine_id: 'A14',
        image_url: 'products/smokehouse-almonds.jpg',
        category: 'Biscuits'
    },
    {
        name: 'A15',
        max_stock: 6,
        current_stock: 6,
        machine_id: 'A15',
        image_url: 'products/hepar.jpg',
        category: 'Boisson'
    },
    {
        name: 'A16',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A16',
        image_url: 'products/guinness.png',
        category: 'Boisson'
    },
    {
        name: 'A17',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A17',
        image_url: 'products/river-orange.jpg',
        category: 'Boisson'
    },
    {
        name: 'A18',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A18',
        image_url: 'products/ikea-apple-strawberry.JPG',
        category: 'Boisson'
    },
    {
        name: 'A22',
        max_stock: 15,
        current_stock: 5,
        machine_id: 'A22',
        image_url: 'products/smarties.jpg',
        category: 'Bonbons'
    },
    {
        name: 'A23',
        max_stock: 15,
        current_stock: 9,
        machine_id: 'A23',
        image_url: 'products/balisto.jpg',
        category: 'Biscuits'
    },
    {
        name: 'A24',
        max_stock: 6,
        current_stock: 3,
        machine_id: 'A24',
        image_url: 'products/smokehouse-almonds.jpg',
        category: 'Biscuits'
    },
    {
        name: 'A25',
        max_stock: 6,
        current_stock: 6,
        machine_id: 'A25',
        image_url: 'products/hepar.jpg',
        category: 'Boisson'
    },
    {
        name: 'A26',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A26',
        image_url: 'products/guinness.png',
        category: 'Boisson'
    },
    {
        name: 'A27',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A27',
        image_url: 'products/river-orange.jpg',
        category: 'Boisson'
    },
    {
        name: 'A28',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A28',
        image_url: 'products/ikea-apple-strawberry.JPG',
        category: 'Boisson'
    },
    {
        name: 'A32',
        max_stock: 15,
        current_stock: 5,
        machine_id: 'A32',
        image_url: 'products/smarties.jpg',
        category: 'Bonbons'
    },
    {
        name: 'A33',
        max_stock: 15,
        current_stock: 9,
        machine_id: 'A33',
        image_url: 'products/balisto.jpg',
        category: 'Biscuits'
    },
    {
        name: 'A34',
        max_stock: 6,
        current_stock: 3,
        machine_id: 'A34',
        image_url: 'products/smokehouse-almonds.jpg',
        category: 'Biscuits'
    },
    {
        name: 'A35',
        max_stock: 6,
        current_stock: 6,
        machine_id: 'A35',
        image_url: 'products/hepar.jpg',
        category: 'Boisson'
    },
    {
        name: 'A36',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A36',
        image_url: 'products/guinness.png',
        category: 'Boisson'
    },
    {
        name: 'A37',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A37',
        image_url: 'products/river-orange.jpg',
        category: 'Boisson'
    },
    {
        name: 'A38',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A38',
        image_url: 'products/ikea-apple-strawberry.JPG',
        category: 'Boisson'
    },
    {
        name: 'A42',
        max_stock: 15,
        current_stock: 5,
        machine_id: 'A42',
        image_url: 'products/smarties.jpg',
        category: 'Bonbons'
    },
    {
        name: 'A43',
        max_stock: 15,
        current_stock: 9,
        machine_id: 'A43',
        image_url: 'products/balisto.jpg',
        category: 'Biscuits'
    },
    {
        name: 'A44',
        max_stock: 6,
        current_stock: 3,
        machine_id: 'A44',
        image_url: 'products/smokehouse-almonds.jpg',
        category: 'Biscuits'
    },
    {
        name: 'A45',
        max_stock: 6,
        current_stock: 6,
        machine_id: 'A45',
        image_url: 'products/hepar.jpg',
        category: 'Boisson'
    },
    {
        name: 'A46',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A46',
        image_url: 'products/guinness.png',
        category: 'Boisson'
    },
    {
        name: 'A47',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A47',
        image_url: 'products/river-orange.jpg',
        category: 'Boisson'
    },
    {
        name: 'A48',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A48',
        image_url: 'products/ikea-apple-strawberry.JPG',
        category: 'Boisson'
    },
    {
        name: 'A52',
        max_stock: 15,
        current_stock: 5,
        machine_id: 'A52',
        image_url: 'products/smarties.jpg',
        category: 'Bonbons'
    },
    {
        name: 'A53',
        max_stock: 15,
        current_stock: 9,
        machine_id: 'A53',
        image_url: 'products/balisto.jpg',
        category: 'Biscuits'
    },
    {
        name: 'A54',
        max_stock: 6,
        current_stock: 3,
        machine_id: 'A54',
        image_url: 'products/smokehouse-almonds.jpg',
        category: 'Biscuits'
    },
    {
        name: 'A55',
        max_stock: 6,
        current_stock: 6,
        machine_id: 'A55',
        image_url: 'products/hepar.jpg',
        category: 'Boisson'
    },
    {
        name: 'A56',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A56',
        image_url: 'products/guinness.png',
        category: 'Boisson'
    },
    {
        name: 'A57',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A57',
        image_url: 'products/river-orange.jpg',
        category: 'Boisson'
    },
    {
        name: 'A58',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A58',
        image_url: 'products/ikea-apple-strawberry.JPG',
        category: 'Boisson'
    },
];

newProducts.forEach((product) => {
    products.save(product);
});
