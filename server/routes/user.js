const { getCurrentUser } = require("../controllers/user");
const { verifyToken } = require("../middleware/verifyToken");

const router = require("express").Router();

router.get("/current", verifyToken, getCurrentUser);

module.exports = router;
