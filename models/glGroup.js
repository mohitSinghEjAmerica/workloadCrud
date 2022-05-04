const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class glGroup extends Model {}
  glGroup.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        status: { type: DataTypes.INTEGER },
        name: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        ag_lead_id: { type: DataTypes.INTEGER },
        region: { type: DataTypes.STRING },
        country: { type: DataTypes.STRING},
    },
    {
      // options
      sequelize,
      modelName: 'glGroup',
      tableName: 'gl_group',
      underscore: true,
    },
  );

  return glGroup;
};