const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class glDepartmentEmployee extends Model {}
  glDepartmentEmployee.init(
    {id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      employee_id: {
        type: DataTypes.INTEGER,
      },
      department_id: {
        type: DataTypes.INTEGER,
      },
      department_allocation: {
        type: DataTypes.FLOAT,
      },
    },
    {
      // options
      sequelize,
      modelName: 'glDepartmentEmployee',
      tableName: 'gl_department_employee',
      timestamps: false,
      underscore: true,
    },
  );

  return glDepartmentEmployee;
};