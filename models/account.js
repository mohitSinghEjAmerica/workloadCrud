const { Model } = require('sequelize');
const glEmployee = require('./glEmployee');
module.exports = (sequelize, DataTypes) => {
  class account extends Model {}
  account.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: { type: DataTypes.STRING },
        password: { type: DataTypes.STRING },
        role: { type: DataTypes.INTEGER },
        link_sent: { type: DataTypes.INTEGER },
        link_sent_date: { type: DataTypes.DATE },
        candidate_id: { type: DataTypes.INTEGER },
        name: { type: DataTypes.STRING },
        phone: { type: DataTypes.STRING  },
        company: { type: DataTypes.TEXT },
        phone1: { type: DataTypes.STRING },
        phone2: { type: DataTypes.STRING },
        reset_token: { type: DataTypes.TEXT },
        status: { type: DataTypes.INTEGER },
        country: { type: DataTypes.STRING },
        timeZone: { type: DataTypes.STRING },
        startWorkingTime: { type: DataTypes.STRING },
        endWorkingTime: { type: DataTypes.STRING },
        profile_picture: { type: DataTypes.TEXT},
    },
    {
      // options
      sequelize,
      modelName: 'account',
      tableName: 'account',
      underscore: true,
    },
  );
  
  return account;
};