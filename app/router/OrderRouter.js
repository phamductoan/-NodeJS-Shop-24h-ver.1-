const express = require("express");

const { printOrderMiddlware } = require("../middlware/OrderMiddlware");
const {createOrder,getAllOrder,getAllOrderOfCustomer,getOrderById,updateOrderById,deleteOrderById} = require("../controllers/orderController");
const router = express.Router();

router.use(printOrderMiddlware);
router.get("/orders", printOrderMiddlware, getAllOrder);

router.post("/customers/:customerId/orders", printOrderMiddlware, createOrder);

router.get("/customers/:customerId/orders", printOrderMiddlware, getAllOrderOfCustomer);

router.get("/orders/:orderId", printOrderMiddlware, getOrderById);

router.put("/orders/:orderId", printOrderMiddlware, updateOrderById);

router.delete("/customers/:customerId/orders/:orderId", printOrderMiddlware, deleteOrderById);


// exports router
module.exports = router;