var express = require('express');
var router = express.Router();
var productController = require('../controllers/products.controller');

/* GET products listing. */
router.get('/', productController.getAllProducts);

/* POST products listing. */
router.post('/add', productController.addProduct)

/* PUT products listing. */
router.put('/edit', productController.editProduct)

/* DELETE products listing. */
router.delete('/delete/:name', productController.deleteProduct)

module.exports = router;
