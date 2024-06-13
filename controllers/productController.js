const Product = require("../models/productModels");

const productController = { 
    //for inserting data in databse

    // index(req, res, next) {
    //     res.status(200).json([
    //         {id: "1", name: "kishan"},
    //         {id: "2", name: "shyam"}
    //     ]);
    // },

    //to find data in database
    async index(req, res, next) {
        let products;
        try{
            products = await Product.find();
        }catch(error){
            res.status(404).json({error: "server error" , serverError : "error"})
        }
        res.status(200).json(products);
    },

    async store(req, res, next) {
        let cat;
        try {
            const { nam, price, categ,subcateg } = req.body;
            cat = await Product.create({ nam, price,categ ,subcateg });
        } catch (error) {
            return res.status(500).json({ error: "Error while creating product", serverError: error });
        }
        res.status(201).json(cat);
    },
    async delete(req, res, next) {
        let cat;
        try {
            const { id } = req.body;
            cat = await Product.findByIdAndDelete({ _id : id });
        } catch (error) {
            return res.status(500).json({ error: "Error while creating product", serverError: error });
        }
        res.status(201).json(cat);
    },



};

module.exports = productController;
