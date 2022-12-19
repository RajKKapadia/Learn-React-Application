const express = require('express');
const router = express.Router();

const {
    createBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog
} = require('../contollers/blog_controllers');

router.get('/', getBlogs);

router.get('/:id', getBlog);

router.post('/', createBlog);

router.delete('/:id', deleteBlog);

router.patch('/:id', updateBlog);

module.exports = {
    router
};