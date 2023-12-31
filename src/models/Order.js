const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
            defaultValue: 'pending'
        }
    }, { timestamps: true });
}