const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload"); 
const {
  getAllProducts,
  createProduct,
  uploadProductImage,
} = require("../controllers/productController");
router.get("/", getAllProducts);
router.post("/", upload.single("image"), createProduct);
function uploadEitherField(req, res, next) {
  upload.single("image")(req, res, function (err) {
    if (err) return next(err);
    if (req.file) return next(); 
  });
}

router.post("/:id/upload", uploadEitherField, uploadProductImage);

module.exports = router;
