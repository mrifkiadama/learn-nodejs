const User = require("../models/Products");

const getAllProducts = async (req, res) => {
    try {
        const [data] = await User.getAllProducts();
    
        res.json({
            message: 'GET all products success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
     }
};


module.exports = {
    getAllProducts,
}
