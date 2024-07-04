const { initRole } = require("../controllers/insert");
const router = require("express").Router();

router.post("/roles", initRole);

module.exports = router;
