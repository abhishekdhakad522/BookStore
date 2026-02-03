import express from 'express';

import { getBook } from '../controller/book.js';
// import { userSignup } from '../controller/user.js';

const router = express.Router();

router.get("/",getBook);


export default router;
