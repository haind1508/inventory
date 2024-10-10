import sequelize from './index';
const { DataTypes } = require('sequelize');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        defaultValue: null,
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SKU: {
        type: DataTypes.STRING,
        defaultValue: null,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
    },
    expire: {
        type: DataTypes.INTEGER,
        defaultValue: null
    },
    remark: {
        type: DataTypes.TEXT,
        defaultValue: null
    }
});

export default Product;
