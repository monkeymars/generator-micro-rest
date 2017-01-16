const routeBase = require('../controllers/<%=model%>.controller');
module.exports = function (server) {
  server.post('/api/new_<%=model%>', routeBase.new);
  server.get('/api/get_<%=model%>', routeBase.get);
  server.get('/api/get_<%=model%>/:id', routeBase.getOne);
  server.put('/api/update_<%=model%>/:id', routeBase.update);
  server.get('/api/delete_<%=model%>/:id', routeBase.delete);
};
