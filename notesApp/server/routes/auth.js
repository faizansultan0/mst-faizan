const { signup, verifyToken } = require("../controllers/auth");
const router = require('express').Router();

router.post('/signup', signup);

router.get(`/:id/verify/:token`, verifyToken)

module.exports = router;