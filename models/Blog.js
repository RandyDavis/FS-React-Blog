const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});

mongoose.model('blog', blogSchema);