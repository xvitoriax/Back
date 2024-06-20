module.exports = function(app) {
    const eventController = require('../controllers/event.controller');
  
    app.post('/api/events', eventController.createEvent);
    app.get('/api/events/list', eventController.getAllEvents);
    app.get('/api/events/:id', eventController.getEventById);
    app.put('/api/events/:id', eventController.updateEvent);
    app.delete('/api/events/:id', eventController.deleteEvent);
  };
  