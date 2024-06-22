

const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/createUser");
const { createProject } = require("../controllers/Add");
const { All } = require("../controllers/All");
const { Update } = require("../controllers/Update");
const { Remove } = require("../controllers/Remove");

router.post("/add", createProject);
router.post("/create", createUser);
router.get("/all/:userId", All);
router.put("/update/:projectId", Update);
router.delete("/remove/:projectId", Remove);

module.exports = router;
