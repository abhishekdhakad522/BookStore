import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoute from './route/book.js'
import userRoute from './route/user.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const URI = process.env.MongoDbURI;



//DB connection
try {
    mongoose.connect(URI);
    console.log("MongoDB Connected");    
} catch (error) {
    console.log(`DB Error: ${error}`);
}

// defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute)
app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`);
    
})