const express = require("express");

const { printProductMiddlware } = require("../middlware/ProductMiddlware");
const {createProduct, getAllProduct, getProductById, updateProductById, deleteProductById} = require("../controllers/ProductController");
const router = express.Router();

router.use(printProductMiddlware);

router.get("/poducts", printProductMiddlware, getAllProduct);

router.post("/poducts", printProductMiddlware, createProduct);

router.get("/poducts/:productId", printProductMiddlware, getProductById);

router.put("/poducts/:productId", printProductMiddlware, updateProductById);

router.delete("/poducts/:productId", printProductMiddlware, deleteProductById);

// exports router
module.exports = router;