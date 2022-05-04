const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wlDepartment extends Model {}
  wlDepartment.init(
    {id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      department_lead_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // options
      sequelize,
      modelName: 'wlDepartment',
      tableName: 'wl_department',
      timestamps: false,
      underscore: true,
    },
  );

  return wlDepartment;
};