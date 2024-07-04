const {
  createPropertyType,
  getPropertyType,
} = require("../controllers/propertyType");
const { propertyTypeValidator } = require("../middleware/joiSchema");
const validateDTO = require("../middleware/validation");
const { verifyToken, isAdmin } = require("../middleware/verifyToken");

const router = require("express").Router();

router.post(
  "/",
  verifyToken,
  isAdmin,
  validateDTO(propertyTypeValidator),
  createPropertyType
);
router.get("/", getPropertyType);

module.exports = router;
