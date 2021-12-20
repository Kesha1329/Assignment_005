const mongoose=require("mongoose");
const companySchema=mongoose.Schema({
    companyId : String,
    name : String,
    productId : [String]
})

const companyModel=mongoose.model("tbl_company",companySchema,"tbl_company");
module.exports=companyModel;