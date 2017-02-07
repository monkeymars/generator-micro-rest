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
      default: 'Service0'
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

    this.fs.copyTpl(
      this.templatePath('./server/server.js'),
      this.destinationPath('./microservices/' + this.props.service + '/server.js'), {
          service: this.props.service,
          port: this.props.port,
          model: this.props.model
      }
    );
    
  },

  install: function () {
    this.installDependencies({
      npm: true,
      bower: false
    });
  }
});
