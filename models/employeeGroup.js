const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employeeGroup extends Model {}
  employeeGroup.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        employee_id: { type: DataTypes.INTEGER },
        group_id: { type: DataTypes.STRING }
    },
    {
      // options
      sequelize,
      modelName: 'employeeGroup',
      tableName: 'employee_group',
      underscore: true,
    },
  );

  return employeeGroup;
};