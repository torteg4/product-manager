
const Product = require('../models/product.model');

// module.exports.index = (req, res) => {
//     res.json({
//         message: "Hello World"
//     });
// }

module.exports ={
    findAll: (req, res) => {
        Product.find()
            .then((allProducts) => res.json(allProducts))
            .catch((err) => 
                res.json({message: "Something went wrong with findAll()", error:err})
        );
    },
    
    findOne: (req,res) => {
        Product.findById(req.params.id)
            .then((product) => res.json(product))
            .catch((err) => 
                res.status(400).json({message: "Something went wrong with findOne()", error:err})
        );
    },

    create: (req, res) => {
        // console.log(req.body)
        Product.create(req.body)
            .then((createdProduct) => res.json(createdProduct))
            .catch((err) => 
                res.status(400).json(err)
        );
    },

    update: (req,res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then((updatedProduct) => res.json(updatedProduct))
            .catch ((err) =>
                res.status(400).json(err)
            );
    },

    destroy: (req,res) => {
        Product.findByIdAndDelete(req.params.id)
            .then((deleteMessage) => res.json(deleteMessage))
            .catch((err) => 
                res.json({message: "Something went wrong with findByIdAndDelete()", error:err})
            );
    }

};