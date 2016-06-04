var year = require("../index.js"),
    t = require('tap');

if (year.get() === new Date().getFullYear()) {
  t.pass('passed')
} else { t.fail('failed') }
