const { Router } = require("express");
const router = Router();
const {createCategory, findCategory} = require("../controllers/categories");
const Product = require("../models/Product.js")

router.post("/", async (req,res)=>{
    try { 
   const categoryCreated = await createCategory(req.body)
   return res.status(200).json(categoryCreated)
    } catch (error) {
        res.status(400).send({'error: ': error})
    } 
})

router.get("/", async(req, res) =>{
    try {
        let categories = await findCategory();
         res.status(200).json(categories);
    } catch (error) {
         res.status(404).send({'error: ': error});
    }
});


router.get("/:category", async (req, res) => {
    const { category } = req.params;
 
    try {
        let categories = await Product.find({category})
         res.json({categories})
    } catch (error) {
        res.status(400).json({"error": error})
    }
});

module.exports = router;

/*
 */