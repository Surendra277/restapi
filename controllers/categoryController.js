const Category = require("../models/categoryModels");
const multer = require("multer")


const categoryController = { 
   
    async index(req, res, next) {
        let categories;
        try{
            categories = await Category.find();
        }catch(error){
            res.status(404).json({error: "server error" , serverError : "error"})

            
        }
        res.status(200).json(categories);
    },
    async search(req, res, next) {
        let categories;
        try{
            const{id} = req.params
            categories = await Category.findById({_id: id});
        }catch(error){
            res.status(404).json({error: "server error" , serverError : "error"})


        }
        res.status(200).json(categories);
    },
    async searchtitle(req, res, next) {
        let categories;
        try{
            
            categories = await Category.find({}, {title: 1,_id:0} );
        }catch(error){
            res.status(404).json({error: "server error" , serverError : "error"})


        }
        res.status(200).json(categories);
    },
    
    async update(req, res, next) {
        let cat;
        try {
            const {id} = req.params;
            console.log(req.params)
            const { title, description } = req.body;
            console.log(req.body);
            cat = await Category.findByIdAndUpdate({_id: id},{ title, description },{new: true});
        } catch (error) {
            return res.status(500).json({ error: "Error while creating category", serverError: error });
        }
        res.status(201).json(cat);
    },
    async store(req, res, next) {
        let cat;
        try {
            const { title, description } = req.body;
            cat = await Category.create({ title, 
                description,
                thumbnail:"/uploads/category/thumbnail/" + req.file.filename,   //to upload photo
            });
        } catch (error) {
            return res.status(500).json({ error: "Error while creating category", serverError: error });
        }
        res.status(201).json(cat);
    },

    async delete(req, res, next) {
        let cat;
        try {
            const { id } = req.body;
            cat = await Category.findByIdAndDelete({ _id : id });
        } catch (error) {
            return res.status(500).json({ error: "Error while creating category", serverError: error });
        }
        res.status(201).json(cat);
    },

   

};

module.exports = categoryController;
