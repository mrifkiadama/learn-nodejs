const DB = require("../configs/database");

const getAllProducts = () => {
    const query = "SELECT * FROM products";

    return DB.execute(query);
};

module.exports = {
    getAllProducts
}
