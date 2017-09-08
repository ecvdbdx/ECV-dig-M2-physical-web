var mongojs = require('mongojs');
var db = mongojs('gmab_db');
var products = db.collection('products');

products.drop();

const newProducts = [
    {
        name: 'Smarties',
        max_stock: 15,
        current_stock: 5,
        machine_id: 'A23',
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
        machine_id: 'A53',
        image_url: 'static/products/smokehouse-almonds.jpg'
    },
    {
        name: 'Hépar',
        max_stock: 6,
        current_stock: 6,
        machine_id: 'A51',
        image_url: 'static/products/hepar.jpg'
    },
    {
        name: 'Guinness',
        max_stock: 6,
        current_stock: 5,
        machine_id: 'A52',
        image_url: 'static/products/guinness.jpg'
    }
];

newProducts.forEach((product) => {
    products.save(product);
});
