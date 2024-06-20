const { register, signIn } = require("../controllers/auth");
const {
  singInValidator,
  registerValidator,
} = require("../midlleware/joiSchema");
const validateDTO = require("../midlleware/validation");

const router = require("express").Router();

router.post("/register", validateDTO(registerValidator), register);
router.post("/signin", validateDTO(singInValidator), signIn);

module.exports = router;
