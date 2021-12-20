const mongoose= require("mongoose")

const productSchema=mongoose.Schema({
    productId : String,
    title : String,
    price : String,
    category : [String],
    companyId : String,
    sellerId : [String]
});

const productModel =mongoose.model("tbl_product",productSchema,"tbl_product");
module.exports = productModel;