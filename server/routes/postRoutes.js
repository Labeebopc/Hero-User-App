const express = require('express');

const { createPost, getPost } = require('../controllers/postController.js')

const router = express.Router()


//CREATE_POST || POST
router.post("/add_post", createPost)

//GET_ALL_POST || GET
router.get("/get_all_post",getPost)


module.exports = router;