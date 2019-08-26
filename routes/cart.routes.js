const express = require("express");
const cartRoutes = express.Router();
const cart = require("./cart");

cartRoutes.get("/cart-items", (req, res) => {
  res.send(cart);
});

cartRoutes.post("/cart-items", (req, res) => {
  console.log(req.body);
});

cartRoutes.put("/cart-items/:id", (req, res) => {
  console.log(req.params.id, req.body);
});

cartRoutes.delete("/cart-items/:id", (req, res) => {
  console.log(req.params.id);
});

module.exports = cartRoutes;
