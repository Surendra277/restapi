
const Admin = require("../models/adminModels")
const adminController = { 
    

    async user(req, res, next) {
        let cat;
        try {
            const { name, password } = req.body;
            cat = await Admin.create({ name, password });
        } catch (error) {
            return res.status(500).json({ error: "Error while creating category", serverError: error });
        }
        res.status(201).json(cat);
    },

    async searchuser(req, res, next) {
        let categories;
        try{
            const{name} = req.params
            // categories = await Category.find({}, {name: 1,_id:0} );
            categories = await Admin.find({name: name} );
        }catch(error){
            res.status(404).json({error: "server error" , serverError : "error"})


        }
        res.status(200).json(categories);
    },

};          

module.exports = adminController;
