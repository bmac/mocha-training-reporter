
/**
 * Module dependencies.
 */

var mocha = require('mocha'),
    JSON = require('./json'),
    Base = mocha.reporters.Base,
    Spec = mocha.reporters.Spec;


function TrainingReporter(runner) {
  Base.call(this, runner);
  Spec.call(this, runner);
  JSON.call(this, runner);
};


TrainingReporter.prototype.__proto__ = Spec.prototype;


exports = module.exports = TrainingReporter;
