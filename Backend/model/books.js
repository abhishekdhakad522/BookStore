import mongoose from "mongoose";

const BookSchema =new mongoose.Schema({
    name:{
        type : String,
    },
    price:{
        type:Number,
    },
    category:{
        type: String,
    },
    imageUrl:{
        type: String,
    },
    title:{
        type:String,
    },
})

const Book = mongoose.model("Book",BookSchema);

export default Book;
