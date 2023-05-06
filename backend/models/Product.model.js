const mongoose = require("mongoose")

//This is Schema Of Product Collections

const productSchema = mongoose.Schema(
    {
        image:String,
        imagesArr:[String],
        title:String,
        price:Number,
        rating:Number,
        description:String,
        size:String,
        category:String
    },{
        versionKey:false
    }
)


//This IS Model Of Product Collections

const ProductModel = mongoose.model("product",productSchema)

module.exports={
    ProductModel
}




// ,
//     "productDetails":{
//       "name":"Levis Tshirt",
//       "material":"Cotten",
//       "type":"Men",
//       "pattern":"xyz",
//       "countryOfOrigin":"Indian"
//     }


// const productSchema = mongoose.Schema(
//     {
//         image:String,
//         imagesArr:[String],
//         title:String,
//         price:Number,
//         rating:Number,
//         description:String,
//         size:String,
//         category:String,
//         productDetails:{
//             name:String,
//             material:String,
//             type:String,
//             pattern:String,
//             countryOfOrigin:String
//         }
//     },{
//         versionKey:false
//     }
// )


// {
//     "image":"imgurl",
//     "imagesArr":["url1","url2","url3"],
//     "title":"Mens Tshirt",
//     "price":499,
//     "rating":4.5,
//     "description":"Mens Best Tshirt By Quick Kart",
//     "size":"L",
//     "category":"Men"
// }