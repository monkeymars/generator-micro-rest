'use strict';

var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wondrous ' + chalk.red('generator-micro-rest') + ' generator!'
    ));
    var prompts = [{
      type: 'input',
      name: 'service',
      message: 'Type your service name:',
      default: 'Movie'
    }, {
      when: function (props) {
        if (props.service) {
          return true;
        }
      },
      type: 'input',
      name: 'port',
      message: 'Type service port:',
      default: '3000'
    }, {
        when: function (props) {
            if (props.port) {
                return true;
            }
        },
        type: 'confirm',
        name: 'ask',
        message: 'Do you want to generate Model',
        default: true
    }, {
        when: function (props) {
            if (props.ask) {
                return true;
            }
        },
        type: 'input',
        name: 'model',
        message: 'Type your model name:',
        default: 'Movie'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    this.fs.copy(
      this.templatePath('./package.json'),
      this.destinationPath('./package.json')
    );

    // Model True
    if (this.props.model) {
      // Config
      this.fs.copy(
        this.templatePath('./server/config'),
        this.destinationPath('./microservices/' + this.props.service + '/config/')
      );

      // Controller
      this.fs.copyTpl(
        this.templatePath('./server/controllers/movie.controller.js'),
        this.destinationPath('./microservices/' + this.props.service + '/controllers/' + this.props.model + '.controller.js'), {
            service: this.props.service,
            model: this.props.model
        }
      );

      // Models
      this.fs.copyTpl(
        this.templatePath('./server/models/movie.model.js'),
        this.destinationPath('./microservices/' + this.props.service + '/models/' + this.props.model + '.model.js'), {
            service: this.props.service,
            model: this.props.model
        }
      );

      // Routes
      this.fs.copyTpl(
        this.templatePath('./server/routes/movie.route.js'),
        this.destinationPath('./microservices/' + this.props.service + '/routes/' + this.props.model + '.route.js'), {
            service: this.props.service,
            model: this.props.model
        }
      );

      this.fs.copyTpl(
        this.templatePath('./server/server.js'),
        this.destinationPath('./microservices/' + this.props.service + '/server.js'), {
            service: this.props.service,
            port: this.props.port,
            model: this.props.model
        }
      );
    } else {
      // Default Server
      this.fs.copyTpl(
          this.templatePath('./server/base.js'),
          this.destinationPath('./microservices/' + this.props.service + '/server.js'), {
              service: this.props.service,
              port: this.props.port
          }
      );
    }
  },

  install: function () {
    this.installDependencies({
      npm: true,
      bower: false
    });
  }
});
