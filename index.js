
/**
 * Module dependencies.
 */

var mocha = require('mocha'),
    JSON = require('./json'),
    Base = mocha.Base,
    cursor = Base.cursor,
    color = Base.color,
    Spec = Base.Spec;


function TrainingReporter(runner) {
  Base.call(this, runner);
  Spec.call(this, runner);
  JSON.call(this, runner);
};


Reporter.prototype.__proto__ = Spec.prototype;


exports = module.exports = TrainingReporter;
