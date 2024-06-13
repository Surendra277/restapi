const mongoose = require("mongoose")

const Schema =mongoose.Schema;
const productSchema = new Schema({
    nam: {type:String},
    price:{type: String},
    categ:{type: String},
    subcateg:{type: String},
   
 
    
},
{
    timestamps: true,
}

)


const Product = mongoose.model("product",productSchema);
module.exports  = Product;