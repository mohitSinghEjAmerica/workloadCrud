const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wlWorkloadActivity extends Model {}
  wlWorkloadActivity.init(
    {
        id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, },
        workload_id: { type: DataTypes.INTEGER },
        type: { type: DataTypes.INTEGER },
        title: { type: DataTypes.TEXT },
        description: { type: DataTypes.TEXT },
    },
    {
      // options
      sequelize,
      modelName: 'wlWorkloadActivity',
      tableName: 'wl_workload_activity',
      underscore: true,
    },
  );

  return wlWorkloadActivity;
};