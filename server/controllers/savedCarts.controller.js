const models = require('../models');

const Cart = models.SavedCart;

const getAllSavedCarts = async (req, res) => {
  try {
    const carts = await Cart.findAll();
    res.json(carts);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

const saveNewCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    res.send(cart);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

const deleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCart = await Cart.destroy({
      where: {
        id: id,
      },
    });
    res.json(deletedCart);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

const editCart = async (req, res) => {
  try {
    const cart = await Cart.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    return res.send(cart);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

module.exports = {
  getAllSavedCarts,
  saveNewCart,
  deleteCart,
  editCart,
};
