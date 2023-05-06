const express = require("express")
const {ProductModel} = require("../models/Product.model")
const productRouter = express.Router()



// This Code is going to help  Admin for adding anything to backend database. Url Endpoint Is ->(/products/create)
productRouter.post("/create",async(req,res)=>{
    try{
        const newProduct = new ProductModel(req.body)
        await newProduct.save()
        res.status(200).send({"Message":"New Product Added Successfully"})
    }catch(err){
        res.status(400).send({"Error":err.message})
    }
})


//This Code is going to help  Admin for getting all the product that are present in backend database. Url Endpoint Is ->(/products)
productRouter.get('/',async(req,res)=>{
    try{
        const products = await ProductModel.find()
        res.status(200).send(products)
    }catch(err){
        res.status(400).send({"Error":err.message})
    }
})

// This Code is going to help  Admin for Updating products that are present in backend database. Url Endpoint Is ->(/products/update/:id)
productRouter.patch("/update/:id" , async(req,res)=>{
    const {id} = req.params
    try{
        await ProductModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).send({"Message":"Product Updated Successfully"})
    }catch(err){
        res.status(400).send({"Error":err.message})
    }
})


// This Code is going to help  Admin for Deleting products that are present in backend database. Url Endpoint Is ->(/products/delete/:id)
productRouter.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params
    try{
        await ProductModel.findByIdAndDelete({_id:id})
        res.status(200).send({"Message":"Product Deleted Successfully"})
    }catch(err){
        res.status(400).send({"Error":err.message})
    }
})



module.exports={
    productRouter
}