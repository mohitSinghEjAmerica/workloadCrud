const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class glDepartment extends Model {}
  glDepartment.init(
    {id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department_lead_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      // options
      sequelize,
      modelName: 'glDepartment',
      tableName: 'gl_department',
      underscore: true,
    },
  );

  return glDepartment;
};