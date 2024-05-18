const {
    signup,
    verifyToken,
    signin,
    currentUser,
    updateUser,
    uploadImage,
} = require("../controllers/auth");
const { requireSignIn } = require("../middlewares/requireSignIn");
const formidable = require('express-formidable');
const router = require('express').Router();

router.post('/signup', signup);
router.put('/update', requireSignIn, updateUser);

router.get(`/:id/verify/:token`, verifyToken);

router.post('/signin', signin);

router.get('/current-user', requireSignIn, currentUser);

router.post(
    "/upload-image",
    requireSignIn,
    formidable({ maxFileSize: 50 * 1024 * 1024 }),
    uploadImage
);

module.exports = router;