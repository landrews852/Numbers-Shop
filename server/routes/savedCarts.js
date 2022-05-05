var express = require('express');
var router = express.Router();
var savedCarts = require('../controllers/savedCarts.controller');

/* GET products listing. */
router.get('/', savedCarts.getAllSavedCarts);

/* POST products listing. */
router.post('/save', savedCarts.saveNewCart);

/* DELETE products listing. */
router.delete('/delete/:id', savedCarts.deleteCart);

/* PUT products listing. */
router.put('/edit', savedCarts.editCart);

module.exports = router;
