module.exports = (sequelize, DataTypes, Model) => {
    class OrderDetail extends Model {
    }
    OrderDetail.init({
        orderId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Order',
                key: 'id'
            }
        },
        bookId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Book',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                min: 0
            }
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: false,
            validate: {
                isNumeric: true,
                min: 1000
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            noUpdate: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
    }, {
        sequelize,
        schema: 'dbo',
        timestamps: true,
        paranoid: true
    })
    return OrderDetail;
}