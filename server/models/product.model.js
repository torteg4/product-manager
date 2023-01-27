const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            minLength: [2, "Title must be at least 2 characters"]
        } ,
        price: {
            type: Number,
            required: [true, "Price is required"]
        } ,
        description: {
            type: String, 
            required: [true, "Description is required"],
            minLength: [5, "Description must be at least 5 characters"]
        },
        type: {
            type: String,
            required: [true, "Type is required"],
            enum: { 
                values: ["dog", "cat", "pokemon", "bird", "rabbit", "other" ], 
                message: "{VALUE} is not supported"
            }
        }
    }, 
    { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);