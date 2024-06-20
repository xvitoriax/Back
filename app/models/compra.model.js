module.exports = (sequelize, Sequelize) => {
  const Compra = sequelize.define("compras", {
    id_compra: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    valor_total: {
      type: Sequelize.DOUBLE
    },
    qntd: {
      type: Sequelize.INTEGER
    },
    dt_compra: {
      type: Sequelize.DATE
    }
  });

  const Event = require('./event.model')(sequelize, Sequelize);
  const User = require('./user.model')(sequelize, Sequelize);

  Compra.belongsTo(Event, {
    foreignKey: 'id_evento',
    onDelete: 'CASCADE'
  });

  Compra.belongsTo(User, {
    foreignKey: 'id_user',
    onDelete: 'CASCADE'
  });

  return Compra;
};
