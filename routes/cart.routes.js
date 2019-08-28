const express = require("express");
const cartRoutes = express.Router();
const pool = require("../connection/connection");

function selectAllItems(req, res) {
  pool.query("select * from ShoppingCart").then(result => {
    res.send(result.rows);
  });
}

cartRoutes.get("/cart-items", selectAllItems);

// cartRoutes.post("/cart-items", (req, res) => {
//   console.log(req.body);
// });

// cartRoutes.put("/cart-items/:id", (req, res) => {
//   console.log(req.params.id, req.body);
// });

// cartRoutes.delete("/cart-items/:id", (req, res) => {
//   console.log(req.params.id);
// });

module.exports = cartRoutes;
