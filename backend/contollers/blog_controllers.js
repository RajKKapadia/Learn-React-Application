const mongoose = require('mongoose');

const Blog = require('../models/blogs_model');

const createBlog = async (req, res) => {

    const { title, body, author } = req.body;

    try {
        let response = await Blog.create(
            {
                title, body, author
            }
        );

        return res.status(200).json({
            status: 200,
            blog: response,
            message: 'Success'
        });
    } catch (error) {
        console.error(`Error at createBlog -> ${error.message}`);
        
        return res.status(400).json({
            status: 400,
            blog: {},
            message: error.message
        });
    }
};

const getBlogs = async (req, res) => {

    try {
        const blogs = await Blog.find({}).sort({ createdAt: -1 });

        return res.status(200).json({
            status: 200,
            blogs: blogs,
            message: 'Success'
        });
    } catch (error) {
        console.error(`Error at getBlogs -> ${error.message}`);
        
        return res.status(400).json({
            status: 400,
            blogs: [],
            message: error.message
        });
    }
};

const getBlog = async (req, res) => {

    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                status: 404,
                message: 'Invalid Blog id',
                blog: {}
            });
        }

        let blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({
                status: 404,
                message: 'No Blog found',
                blog: {}
            });
        }

        return res.status(200).json({
            status: 200,
            message: 'Success',
            blog: blog
        });

    } catch (error) {
        console.error(`Error at getBlog -> ${error.message}`);
        
        return res.status(400).json({
            status: 400,
            blog: {},
            message: error.message
        });
    }
};

const updateBlog = async (req, res) => {

    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                status: 404,
                message: 'Invalid Blog id',
                blog: {}
            });
        }

        let blog = await Blog.findByIdAndUpdate({_id: id}, req.body);

        if (!blog) {
            return res.status(404).json({
                status: 404,
                message: 'No Blog found',
                blog: {}
            });
        }

        return res.status(200).json({
            status: 200,
            message: 'Success',
            blog: blog
        });

    } catch (error) {
        console.error(`Error at updateBlog -> ${error.message}`);
        
        return res.status(400).json({
            status: 400,
            blog: {},
            message: error.message
        });
    }
};

const deleteBlog = async (req, res) => {

    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                status: 404,
                message: 'Invalid Blog id',
                blog: {}
            });
        }

        let blog = await Blog.findByIdAndDelete({_id: id});

        if (!blog) {
            return res.status(404).json({
                status: 404,
                message: 'No Blog found',
                blog: {}
            });
        }

        return res.status(200).json({
            status: 200,
            message: 'Success',
            blog: blog
        });

    } catch (error) {
        console.error(`Error at deleteBlog -> ${error.message}`);
        
        return res.status(400).json({
            status: 400,
            blog: {},
            message: error.message
        });
    }
};

module.exports = {
    createBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog
};