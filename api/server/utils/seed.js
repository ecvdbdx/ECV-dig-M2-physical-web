var mongojs = require('mongojs');
var db = mongojs('gmab_db');
var products = db.collection('products');

products.drop();

const newProducts = [
    {
        name: 'Product 1',
        max_stock: 10,
        current_stock: 8,
        machine_id: 'A21'
    },
    {
        name: 'Product 2',
        max_stock: 10,
        current_stock: 10,
        machine_id: 'A22'
    },
    {
        name: 'Product 3',
        max_stock: 10,
        current_stock: 6,
        machine_id: 'A23'
    },
    {
        name: 'Product 4',
        max_stock: 10,
        current_stock: 7,
        machine_id: 'A24'
    }
];

newProducts.forEach((product) => {
    products.save(product);
});
