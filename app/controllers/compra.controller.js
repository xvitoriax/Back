const { Compra } = require('../models/compra.model');
const { Event } = require('../models/event.model');
const { User } = require('../models/user.model');

exports.createCompra = async (req, res) => {
  try {
    const compra = await Compra.create(req.body);
    res.status(201).send(compra);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getCompras = async (req, res) => {
  try {
    const compras = await Compra.findAll({
      include: [
        { model: Event, as: 'event' },
        { model: User, as: 'user' }
      ]
    });
    res.send(compras);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getCompraById = async (req, res) => {
  try {
    const id = req.params.id;
    const compra = await Compra.findByPk(id, {
      include: [
        { model: Event, as: 'event' },
        { model: User, as: 'user' }
      ]
    });
    if (!compra) {
      res.status(404).send({ message: 'Compra não encontrada' });
    } else {
      res.send(compra);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.updateCompra = async (req, res) => {
  try {
    const id = req.params.id;
    const compra = await Compra.findByPk(id);
    if (!compra) {
      res.status(404).send({ message: 'Compra não encontrada' });
    } else {
      await compra.update(req.body);
      res.send(compra);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteCompra = async (req, res) => {
  try {
    const id = req.params.id;
    const compra = await Compra.findByPk(id);
    if (!compra) {
      res.status(404).send({ message: 'Compra não encontrada' });
    } else {
      await compra.destroy();
      res.send({ message: 'Compra deletada com sucesso' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
