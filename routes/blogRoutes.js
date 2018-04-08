const mongoose = require('mongoose');
const Blog = mongoose.model('blog');

module.exports = app => {
    app.get('/api/blogs', async (req, res) => {
        const blogs = await Blog.find({});

        res.send(blogs);
    })
};