var restify = require('restify');
var plugins = require('restify-plugins');

const server = restify.createServer({
  name: 'service0',
  version: '1.0.0'
});

server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.queryParser());
server.use(plugins.bodyParser());

require('./routes/movie.route')(server);

server.get('/', function (req, res, next) {
  res.send('Server is running');
  return next();
});

server.listen(3000, function () {
  console.log('server is up!');
  console.log('%s listening at %s', server.name, server.url);
});
