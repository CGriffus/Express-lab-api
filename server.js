const express = require("express");
const app = express();
const cartRoutes = require("./routes/cart.routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/", cartRoutes);

const port = 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
