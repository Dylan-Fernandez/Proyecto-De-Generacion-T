const express = require('express');
const router = express.Router();
const multer = require('multer');
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop();
    cb(null, Date.now() + '.' + ext);
  }
});
const upload = multer({ storage });

router.get('/', productController.getAll);
router.get('/:id', productController.getOne);

// endpoints protegidos para crear/editar/eliminar productos (puedes controlar permisos)
router.post('/', auth, upload.single('image'), productController.create);
router.put('/:id', auth, upload.single('image'), productController.update);
router.delete('/:id', auth, productController.remove);

module.exports = router;
