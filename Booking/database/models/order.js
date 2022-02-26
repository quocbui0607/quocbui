module.exports = (sequelize, DataTypes, Model) => {
  class Order extends Model {}
  Order.init(
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //     model: 'User',
        //     key: 'id'
        // }
      },
      totalPrice: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
          isNumeric: true,
          min: 1000,
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        min: [1],
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        noUpdate: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      schema: "dbo",
      timestamps: true,
      paranoid: true,
    }
  );
  return Order;
};
