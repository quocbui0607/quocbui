module.exports = (sequelize, DataTypes, Model) => {
  class Book extends Model {}
  Book.init(
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [1, 100],
        },
        set(value) {
          this.setDataValue("title", value.replace(/\s+/g, " ").trim());
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        min: [1],
      },
      publisherId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "Publisher",
        //   key: "id",
        // },
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //     model: 'Author',
        //     key: 'id'
        // }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
          min: 0,
        },
      },
      price: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
          isNumeric: true,
          min: 1000,
        },
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
  return Book;
};
