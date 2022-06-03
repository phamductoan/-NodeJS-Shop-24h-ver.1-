const express = require("express");

const { printCustomerMiddlware } = require("../middlware/CustomerMiddlware");
const {createCustomer, getAllCustomer, getCustomerById, updateCustomerById, deleteCustomerById} = require("../controllers/CustomerController");
const router = express.Router();

router.use(printCustomerMiddlware);

router.get("/customers", printCustomerMiddlware, getAllCustomer);

router.post("/customers", printCustomerMiddlware, createCustomer);

router.get("/customers/:customerId", printCustomerMiddlware, getCustomerById);

router.put("/customers/:customerId", printCustomerMiddlware, updateCustomerById);

router.delete("/customers/:customerId", printCustomerMiddlware, deleteCustomerById);

// exports router
module.exports = router;