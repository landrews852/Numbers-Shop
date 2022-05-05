var express = require('express');
var router = express.Router();
var savedCartsRouter = require('./savedCarts');
var productsRouter = require('./products');

/* products ROUTER. */
// router.use('/products', require('./products'));
router.use('/products', productsRouter);

/* savedCarts ROUTER. */
// router.use('/mycarts', require('./savedCarts'));
router.use('/carts', savedCartsRouter);


module.exports = router;
