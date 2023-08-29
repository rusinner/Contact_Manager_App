require("dotenv").config();

const express = require("express");

const apiRoutes = require("./routes/apiRoutes");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", apiRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
