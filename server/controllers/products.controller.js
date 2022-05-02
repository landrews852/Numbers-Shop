const models = require ('../models');

const Product = models.Product;

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.send(product);
  }
  catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

const editProduct = async (req, res) => {
  try {
    const product = await Product.update(req.body, {
      where: {
        id: req.body.id
      }
    });
    return res.send(product);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

const deleteProduct = async (req, res) => {
  console.log(req.params);
  const { name } = req.params;
  try {
    const deletedProduct = await Product.destroy({
      where: {
        name: name
      }
    });
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  editProduct,
  deleteProduct
}