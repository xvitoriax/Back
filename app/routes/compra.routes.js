module.exports = function(app) {
    const compraController = require('../controllers/compra.controller');
  
    app.post('/api/compras', compraController.createCompra);
    app.get('/api/compras', compraController.getCompras);
    app.get('/api/compras/:id', compraController.getCompraById);
    app.put('/api/compras/:id', compraController.updateCompra);
    app.delete('/api/compras/:id', compraController.deleteCompra);
  };
  