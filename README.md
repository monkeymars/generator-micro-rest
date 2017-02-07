# generator-micro-rest
[![NPM](https://nodei.co/npm/generator-micro-rest.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/generator-micro-rest/)

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> generate simple server with restify

## Why use restify and not express?

> From API Guide | Restify Documentation.

I get asked this more than anything else, so I'll just get it out of the way up front. Express' use case is targeted at browser applications and contains a lot of functionality, such as templating and rendering, to support that. Restify does not.

Restify exists to let you build "strict" API services that are maintanable and observable. Restify comes with automatic DTrace support for all your handlers, if you're running on a platform that supports DTrace.

In short, I wrote restify as I needed a framework that gave me absolute control over interactions with HTTP and full observability into the latency and characteristics of my applications. If you don't need that, or don't care about those aspect(s), then it's probably not for you.


## Installation

First, install [Yeoman](http://yeoman.io) and generator-micro-rest using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/).

```bash
npm install -g yo generator-micro-rest
```

Then generate your new project:

```bash
yo micro-rest
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

ISC © [akungery](https://instagram.com/gery.wibowo)


[npm-image]: https://badge.fury.io/js/generator-micro-rest.svg
[npm-url]: https://npmjs.org/package/generator-micro-rest
[travis-image]: https://travis-ci.org/monkeymars/generator-micro-rest.svg?branch=master
[travis-url]: https://travis-ci.org/monkeymars/generator-micro-rest
[daviddm-image]: https://david-dm.org/monkeymars/generator-micro-rest.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/monkeymars/generator-micro-rest
[coveralls-image]: https://coveralls.io/repos/monkeymars/generator-micro-rest/badge.svg
[coveralls-url]: https://coveralls.io/r/monkeymars/generator-micro-rest
