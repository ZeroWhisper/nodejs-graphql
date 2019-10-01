'use strict';
module.exports = (sequelize, DataTypes) => {
  const venda = sequelize.define('venda', {
    user_id: DataTypes.INTEGER,
    produto_id: DataTypes.INTEGER
  }, {});
  venda.associate = function(models) {
    // associations can be defined here
  };
  return venda;
};