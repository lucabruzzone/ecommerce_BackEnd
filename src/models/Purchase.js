const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Purchase', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.ENUM('in_progress', 'received'),
            defaultValue: 'in_progress'
        }
    }, { timestamps: true });
}