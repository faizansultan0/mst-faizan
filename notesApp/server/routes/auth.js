const { signup, verifyToken, signin } = require("../controllers/auth");
const router = require('express').Router();

router.post('/signup', signup);

router.get(`/:id/verify/:token`, verifyToken);

router.post('/signin', signin)

module.exports = router;