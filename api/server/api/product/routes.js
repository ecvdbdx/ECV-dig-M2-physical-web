const Router = require('express').Router();
const controller = require('./controller');

Router.route('/')
    .get(controller.getProducts);

Router.route('/:id')
    .post(controller.saveProduct);

module.exports = Router;
