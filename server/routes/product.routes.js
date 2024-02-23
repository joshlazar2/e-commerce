const ProductController = require('../controllers/product.controller')
const {authenticate} = require('../config/jwt.config')


const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}.${file.originalname.split('.').pop()}`);
    },
});

const upload = multer({ storage });


module.exports = app => {
    app.get('/api/allProducts', ProductController.findAllProducts);
    app.post('/api/createProduct', authenticate, upload.single('image'), ProductController.createProduct);
    app.get('/api/featuredProducts', ProductController.findFeaturedProducts);
    app.get('/api/oneProduct/:id', ProductController.findOneProduct);
    app.get('/api/oneCategory/:category', ProductController.productsByCategory);
    app.post('/api/editProduct/:id', authenticate, upload.single('image'), ProductController.editProduct);
    app.delete('/api/deleteProduct/:id', authenticate, ProductController.deleteProduct);
}