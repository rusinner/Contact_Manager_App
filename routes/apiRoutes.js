const express = require("express");
const router = express.Router();

//create a general apiRoutes file so i can simpoy put router.use in every case for each one
router.use("/contact", require("./contactRoutes"));
router.use("/user", require("./userRoutes"));

module.exports = router;
