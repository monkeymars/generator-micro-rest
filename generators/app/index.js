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
      message: 'type service name:',
      default: 'service0'
    }, {
      when: function(props) {
        if (props.service) {
          return true;
        }
      },
      type: 'input',
      name: 'port',
      message: 'type service port:',
      default: '3000'
    }]

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('./server'),
      this.destinationPath('./' + this.props.service  ), {
        service: this.props.service,
        port: this.props.port
      }
    );
  },

  install: function () {
    this.installDependencies();
  }
});
