module.exports = (sequelize, DataTypes, Model) => {
    const User = require("./models/user")(sequelize, DataTypes, Model);
    const Publisher = require("./models/publisher")(sequelize, DataTypes, Model);
    const Author = require("./models/author")(sequelize, DataTypes, Model);
    const Book = require("./models/book")(sequelize, DataTypes, Model);
    const Order = require("./models/order")(sequelize, DataTypes, Model);
    const OrderDetail = require("./models/orderDetail")(sequelize, DataTypes, Model);

    // Relationship [Publisher] 1-n [Book]
    Publisher.hasMany(Book, {
        as: "books",
        foreignKey: "publisherId",
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE'
    });
    Book.belongsTo(Publisher, {
        as: "publisher",
        foreignKey: "publisherId",
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE'
    });

    // Relationship [Author] 1-n [Book]
    Author.hasMany(Book, {
        as: "books",
        foreignKey: "authorId",
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE'
    });
    Book.belongsTo(Author, {
        as: "author",
        foreignKey: "authorId",
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE'
    });

    // Relationship [User] 1-n [Order]
    User.hasMany(Order, {
        as: "orders",
        foreignKey: "userId",
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE'
    });
    Order.belongsTo(User, {
        as: "user",
        foreignKey: "userId",
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE'
    });

    // Relationship [Book] n-n [Order] -> [OrderDetail]
    Book.belongsToMany(Order, {
        as: 'orders',
        through: {
            model: OrderDetail,
            unique: false,
            paranoid: true
        },
        foreignKey: 'bookId',
        otherKey: 'orderId',
        timestamps: true,
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE'
    });
    Order.belongsToMany(Book, {
        as: 'books',
        through: {
            model: OrderDetail,
            unique: false,
            paranoid: true
        },
        foreignKey: 'orderId',
        otherKey: 'bookId',
        timestamps: true,
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE'
    });

    // Relationship [Book] 1-n [OrderDetail]
    Book.hasMany(OrderDetail, {
        as: "orderDetails",
        foreignKey: "bookId",
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE'
    });
    OrderDetail.belongsTo(Book, {
        as: "book",
        foreignKey: "bookId",
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE'
    });

    // Relationship [Order] 1-n [OrderDetail]
    Order.hasMany(OrderDetail, {
        as: "orderDetails",
        foreignKey: "orderId",
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE'
    });
    OrderDetail.belongsTo(Order, {
        as: "order",
        foreignKey: "orderId",
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE'
    });


    return {
        User,
        Publisher,
        Author,
        Book,
        Order,
        OrderDetail
    }
}
