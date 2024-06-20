const db = require("../models");
const Event = db.event;

exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar evento', error: error.message });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao recuperar eventos', error: error.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const id = req.params.id;
    const event = await Event.findByPk(id);
    if (!event) {
      res.status(404).json({ message: 'Evento não encontrado' });
    } else {
      res.json(event);
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao recuperar evento', error: error.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const event = await Event.findByPk(id);
    if (!event) {
      res.status(404).json({ message: 'Evento não encontrado' });
    } else {
      await event.update(req.body);
      res.json(event);
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar evento', error: error.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const event = await Event.findByPk(id);
    if (!event) {
      res.status(404).json({ message: 'Evento não encontrado' });
    } else {
      await event.destroy();
      res.json({ message: 'Evento excluído com sucesso' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir evento', error: error.message });
  }
};
