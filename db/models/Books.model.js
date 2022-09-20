module.exports = (sequelize, Sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        // Model attributes are defined here
        title: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        isbn: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        authors: {
            type: DataTypes.STRING,
            // validate: {
            //   isEmail: true,
            // },
            // allowNull defaults to true
        },
        description: {
            type: DataTypes.TEXT
            // allowNull defaults to true
        }
      }, {
        // Other model options go here
      });

      return Book
}