const {
    signup,
    verifyToken,
    signin,
    currentUser,
    updateUser,
} = require("../controllers/auth");
const upload = require('../middlewares/imageUpload');
const { requireSignIn } = require("../middlewares/requireSignIn");
const router = require('express').Router();

router.post('/signup', signup);

router.put("/update", requireSignIn, upload.single("image"), updateUser);

router.get(`/:id/verify/:token`, verifyToken);

router.post('/signin', signin);

router.get('/current-user', requireSignIn, currentUser)

module.exports = router;