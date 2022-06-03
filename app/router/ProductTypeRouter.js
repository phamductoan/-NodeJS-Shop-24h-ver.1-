const express = require("express");

const { printProductTypeMiddlware } = require("../middlware/ProductTypeMiddlware");
const {createProductType, getAllProductType, getProductTypeById, updateProductTypeById, deleteProductTypeById} = require("../controllers/ProductTypeController");
const router = express.Router();

router.use(printProductTypeMiddlware);

router.get("/poductTypes", printProductTypeMiddlware, getAllProductType);

router.post("/poductTypes", printProductTypeMiddlware, createProductType);

router.get("/poductTypes/:productTypeId", printProductTypeMiddlware, getProductTypeById);

router.put("/poductTypes/:productTypeId", printProductTypeMiddlware, updateProductTypeById);

router.delete("/poductTypes/:productTypeId", printProductTypeMiddlware, deleteProductTypeById);

// exports router
module.exports = router;