module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("events", {
    id_evento: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    },
    value: {
      type: Sequelize.DOUBLE
    },
    qntd_total: {
      type: Sequelize.INTEGER
    },
    qntd_disp: {
      type: Sequelize.INTEGER
    },
    descr: {
      type: Sequelize.STRING
    },
    local: {
      type: Sequelize.STRING
    }
  });
  
  return Event;
};
