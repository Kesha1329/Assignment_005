const mongoose=require("mongoose")

const sellerSchema=mongoose.Schema({
    sellerId : String,
    name : String,
    productId : [String]
});

const sellerModel=mongoose.model("tbl_seller",sellerSchema,"tbl_seller")
module.exports=sellerModel;