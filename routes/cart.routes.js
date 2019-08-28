const express = require("express");
const cartRoutes = express.Router();
const pool = require("../connection/connection");

function selectAllItems(req, res) {
  pool.query("select * from ShoppingCart").then(result => {
    res.send(result.rows);
  });
}

cartRoutes.get("/cart-items", selectAllItems);

cartRoutes.post("/cart-items", (req, res) => {
  pool
    .query(
      "insert into ShoppingCart (product, price, quantity) values ($1::text, $2::int, $3::int)",
      [req.body.product, req.body.price, req.body.quantity]
    )
    .then(() => {
      selectAllItems(req, res);
    });
});

cartRoutes.put("/cart-items/:id", (req, res) => {
  pool
    .query(
      "update ShoppingCart set product=$1::text, price=$2::int, quantity=$3::int where id=$4::int",
      [req.body.product, req.body.price, req.body.quantity, req.params.id]
    )
    .then(() => {
      selectAllItems(req, res);
    });
});

cartRoutes.delete("/cart-items/:id", (req, res) => {
  pool
    .query("delete from ShoppingCart where id=$1::int", [req.params.id])
    .then(() => {
      selectAllItems(req, res);
    });
});

module.exports = cartRoutes;
