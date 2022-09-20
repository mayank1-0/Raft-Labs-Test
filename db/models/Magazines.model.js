module.exports = (sequelize, Sequelize, DataTypes) => {
    const Magazine = sequelize.define('Magazine', {
        // Model attributes are defined here
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        isbn: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        authors: {
          type: DataTypes.STRING,
          // allowNull defaults to true
          // validate: {
          //   isEmail: true
          // }
        },
        publishedAt: {
          type: DataTypes.DATEONLY
          // allowNull defaults to true
        }
      }, {
        // Other model options go here
      });

      return Magazine
}