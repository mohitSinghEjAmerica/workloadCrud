const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wlStatus extends Model {}
  wlStatus.init(
    {
        id: { type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, },
        value: { type: DataTypes.STRING },
    },
    {
      // options
      sequelize,
      modelName: 'wlStatus',
      tableName: 'wl_status',
      underscore: true,
    },
  );

  return wlStatus;
};