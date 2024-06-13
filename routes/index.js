const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');
const adminController= require('../controllers/adminController')
const multer = require("multer")
const path = require("path")

//to upload photo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/category/thumbnail')//path whrere the photos will be saved
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+ path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage: storage })
  


  router.post("/category", upload.single("thumbnail"),categoryController.store); // to upload photo


// router.post("/category", categoryController.store);
// router.get("/category", categoryController.index);
router.delete("/category", categoryController.delete);
router.put("/category/:id", categoryController.update);
// router.get("/category/:id", categoryController.search);
// router.get("/category", categoryController.searchtitle);


router.get("/admin/:name", adminController.searchuser);
router.post("/admin", adminController.user);


router.post("/product", productController.store);
router.get("/product", productController.index);
router.delete("/product", productController.delete);

module.exports = router;






