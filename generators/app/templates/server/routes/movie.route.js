const routeBase = require('../controllers/<%=model%>.controller');
module.exports = function (server) {
  server.post('/new_<%=model%>', routeBase.new);
  server.get('/get_<%=model%>', routeBase.get);
  server.get('/get_<%=model%>/:id', routeBase.getOne);
  server.put('/update_<%=model%>/:id', routeBase.update);
  server.get('/delete_<%=model%>/:id', routeBase.delete);
};
