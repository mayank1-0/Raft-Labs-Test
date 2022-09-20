module.exports = (sequelize, Sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
        // Model attributes are defined here
        email: {
          type: Sequelize.STRING,
          validate: {
            isEmail: true,
          },
          unique: true
        },
        firstName: {
          type: DataTypes.STRING,
        },
        lastName: {
          type: DataTypes.STRING
          // allowNull defaults to true
        }
      }, {
        // Other model options go here
      });

      return Author
}