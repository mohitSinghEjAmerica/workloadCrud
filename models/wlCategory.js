const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wlCategory extends Model {}
  wlCategory.init(
    {
        id: { type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, },
        name: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        active: { type: DataTypes.INTEGER },
        group_id: { type: DataTypes.INTEGER },
        prefix: { type: DataTypes.STRING },
    },
    {
      // options
      sequelize,
      modelName: 'wlCategory',
      tableName: 'wl_category',
      underscore: true,
    },
  );

  return wlCategory;
};