var restify = require('restify');
var plugins = require('restify-plugins');

const server = restify.createServer({
  name: '<%=service%>',
  version: '1.0.0'
});

let PORT = '<%=port%>';

server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.queryParser());
server.use(plugins.bodyParser());

server.get('/', function (req, res, next) {
  res.send('Server is running');
  return next();
});

server.listen(PORT, function () {
  console.log('<%=service%> server is up!');
  console.log('%s listening at %s', server.name, server.url);
});
