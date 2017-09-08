var mongojs = require('mongojs');
var db = mongojs('gmab_db');
var products = db.collection('products');

module.exports = {
    getProducts,
    saveProduct
};

function getProducts(req, res, next) {
    products.find(function(err, products) {
        return res.json(products)
    });
}

function saveProduct(req, res, next) {
    const product = {
        name: res.body.name,
        max_stock: res.body.max_stock,
        current_stock: res.body.current_stock,
        machine_id: res.body.machine_id,
        image_url: res.body.image_url
    };

    products.save(product, function(err, saved) {
        if( err || !saved ) console.log("Product not saved");
        else console.log("Product saved");
    });
}
