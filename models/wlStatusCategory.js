const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wlStatusCategory extends Model {}
  wlStatusCategory.init(
    {
        id: { type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, },
        wl_category_id: { type: DataTypes.INTEGER },
        wl_status_id: { type: DataTypes.INTEGER },
        status_order: { type: DataTypes.INTEGER },
    },
    {
      // options
      sequelize,
      modelName: 'wlStatusCategory',
      tableName: 'wl_status_category',
      underscore: true,
    },
  );

  return wlStatusCategory;
};