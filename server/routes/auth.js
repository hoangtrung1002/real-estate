const { signUp, signIn } = require("../controllers/auth");
const { singInValidator, signUpValidator } = require("../middleware/joiSchema");
const validateDTO = require("../middleware/validation");

const router = require("express").Router();

router.post("/signup", validateDTO(signUpValidator), signUp);
router.post("/signin", validateDTO(singInValidator), signIn);

module.exports = router;
