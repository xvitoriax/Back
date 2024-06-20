const { Event } = require('../models');
const { createEvent: createEventController } = require('../controllers/event.controller');

const checkDuplicateEventName = (req, res, next) => {
  Event.findOne({
    where: {
      name: req.body.name
    }
  }).then(event => {
    if (event) {
      res.status(400).send({
        message: "Failed! Event name is already in use!"
      });
      return;
    }

    next();
  }).catch(err => {
    res.status(500).send({
      message: "Error checking event name uniqueness",
      error: err.message
    });
  });
};

const verifyEventRole = async (req, res, next) => {
  next();
};

const createEvent = async (req, res, next) => {
  try {
    await createEventController(req, res);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao criar evento",
      error: error.message
    });
  }
};

const verifyEventSignUp = {
  checkDuplicateEventName,
  verifyEventRole,
  createEvent
};

module.exports = verifyEventSignUp;
