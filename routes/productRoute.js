const express = require("express");
const { getAllProducts, getSingleProduct, createSingleProduct, updateAllProduct, deleteAllProduct} = require("../controllers/productController")
const router = express.Router()


router.get("/products", getAllProducts)

//get a single product//
router.get("/products/:id", getSingleProduct)

// //create a product//
router.post("/products/:id", createSingleProduct)

// //update a product//
router.put("/products/:id", updateAllProduct)


// //delete a product//
router.delete("/products/:id", deleteAllProduct)


module.exports = router