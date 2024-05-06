const {
    signup,
    verifyToken,
    signin,
    currentUser,
} = require("../controllers/auth");
const { requireSignIn } = require("../middlewares/requireSignIn");
const router = require('express').Router();

router.post('/signup', signup);

router.get(`/:id/verify/:token`, verifyToken);

router.post('/signin', signin);

router.get('/current-user', requireSignIn, currentUser);

module.exports = router;