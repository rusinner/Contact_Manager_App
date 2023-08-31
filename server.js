require("dotenv").config();
const connectDb = require("./config/dbConnection");

const express = require("express");

connectDb();

const errorHandler = require("./middleware/errorHandler");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", apiRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
