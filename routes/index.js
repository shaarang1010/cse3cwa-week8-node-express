const express = require("express");
const { route } = require("./get");

const router = express();

router.use("/", require("./get"));
router.use("/", require("./post"));
router.use("/", require("./put"));
router.use("/", require("./delete"));

module.exports = router;
