const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class glEmployee extends Model {}
  glEmployee.init(
    {
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        job_id: { type: DataTypes.INTEGER },
        account_id: { type: DataTypes.INTEGER },
        salary: { type: DataTypes.STRING },
        time_zone: { type: DataTypes.STRING },
        tax_id: { type: DataTypes.STRING },
        engagement_type: { type: DataTypes.STRING },
        working_hours: { type: DataTypes.TEXT },
        job_role: { type: DataTypes.TEXT },
        job_class: { type: DataTypes.TEXT },
        joining_date: { type: DataTypes.DATE },
        emp_log: { type: DataTypes.TEXT },
        termination_date: { type: DataTypes.DATE },
        evaluation_frequency: { type: DataTypes.TEXT },
        l1_manager: { type: DataTypes.TEXT },
        l2_manager: { type: DataTypes.TEXT },
        l3_manager: { type: DataTypes.TEXT },
        hr_manager: { type: DataTypes.TEXT },
        emergency_contact: { type: DataTypes.TEXT },
        elegible_for_bonus: { type: DataTypes.INTEGER },
        hr_notes: { type: DataTypes.TEXT },
        is_billable: { type: DataTypes.INTEGER },
        annual_bonus: { type: DataTypes.FLOAT },
        probation_period: { type: DataTypes.INTEGER }
    },
    {
      // options
      sequelize,
      modelName: 'glEmployee',
      tableName: 'gl_employee',
      underscore: true,
    },
  );

  return glEmployee;
};