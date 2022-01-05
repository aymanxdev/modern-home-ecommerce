const router = require("express").Router();
const Order = require("../models/Order");
const {
  verifyTokenAndAuthorisation,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");

//CREATE ORDER

router.post("/", verifyTokenAndAuthorisation, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE ORDER
router.put("/update/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedOrder);
    console.log("Order updated successfully");
  } catch (error) {
    res.status(500).json(error);
    console.log("Order Cart failed", error);
  }
});

// //DELETE ORDER

router.delete("/delete/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted from DB");
  } catch (error) {
    res.status(500).json(error);
  }
});

// // GET USER ORDERS

router.get("/find/:userId", async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

// // GET PRODUCTS STATS

router.get("/incomestats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));

  try {
    const ordersData = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      { $project: { month: { $month: "$createdAt" }, sales: "$amount" } },
      { $group: { _id: "$month", total: { $sum: "$sales" } } },
    ]);
    res.status(200).json(ordersData);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

module.exports = router;
