const  mongoose  = require("mongoose");
const productModel  = require("../model/Product");

const createProduct  = (request, response) => {
    let _id = mongoose.Types.ObjectId();
    let name = request.body.name;
    let description = request.body.description;
    let type = request.body.type;
    let imageUrl = request.body.imageUrl;
    let buyPrice = request.body.buyPrice;
    let promotionPrice = request.body.promotionPrice;
    let amount = request.body.amount;
    let timeCreated = request.body.timeCreated;
    let timeUpdated = request.body.timeUpdated;

    if (!name) {
        return response.status(400).json({
            status: "Bad request",
            message: "Name is required"
        })
    }

    productModel.create({
        _id, name, description, type, imageUrl, buyPrice, promotionPrice, amount, timeCreated, timeUpdated
    }, (error, data) => {
        if(error) {
            return response.status(500).json({
                status: "Internal server error",
                message: error.message
            })
        } else {
            return response.status(201).json({
                status: "Created",
                data: data
            })
        }
    })
}
const getAllProduct  = (request, response) => {
    productModel.find((error, data) => {
        if(error) {
            return response.status(500).json({
                status: "Internal server error",
                message: error.message
            })
        } else {
            return response.status(200).json({
                status: "Success",
                data: data
            })
        }
    })
}


const getProductById  = (request, response) => {
    let productId = request.params.productId;

    if(!mongoose.Types.ObjectId.isValid(productId)) {
        return response.status(400).json({
            status: "Bad request",
            message: "productId is not valid"
        })
    }

    productModel.findById(productId, (error, data) => {
        if(error) {
            return response.status(500).json({
                status: "Internal server error",
                message: error.message
            })
        } else {
            if(data) {
                return response.status(200).json({
                    status: "Success",
                    data: data
                })
            } else {
                return response.status(404).json({
                    status: "Not found"
                })
            }
        }
    })
}

const updateProductById  = (request, response) => {
    let productId = request.params.productId;

    if(!mongoose.Types.ObjectId.isValid(productId)) {
        return response.status(400).json({
            status: "Bad request",
            message: "productId is not valid"
        })
    }

    let {  name, description, type, imageUrl, buyPrice, promotionPrice, amount, timeCreated, timeUpdated } = request.body;

    productModel.findByIdAndUpdate(productId, {
        name: name,
        description: description,
        type: type,
        imageUrl: imageUrl,
        buyPrice: buyPrice,
        promotionPrice: promotionPrice,
        amount: amount,
        timeCreated: timeCreated,
        timeUpdated: timeUpdated
    }, (error, data) => {
        if(error) {
            return response.status(500).json({
                status: "Internal server error",
                message: error.message
            })
        } else {
            return response.status(200).json({
                status: "Success",
                data: data
            })
        }
    })
}

const deleteProductById  = (request, response) => {
    let productId = request.params.productId;

    if(!mongoose.Types.ObjectId.isValid(productId)) {
        return response.status(400).json({
            status: "Bad request",
            message: "productId is not valid"
        })
    }

    productModel.findByIdAndDelete(productId, (error) => {
        if(error) {
            return response.status(500).json({
                status: "Internal server error",
                message: error.message
            })
        } else {
            return response.status(204).send()
        }
    })
}

module.exports = {createProduct, getAllProduct, getProductById, updateProductById, deleteProductById  }