const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      }
    },
    duration: {
      type: DataTypes.STRING
    },
    season: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['summer', 'fall', 'winter' , 'spring']]
      },
      allowNull: false
    }
  }, {timestamps: false})
};