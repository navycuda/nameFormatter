// Require
const chai = require(`chai`);
const assert = chai.assert;
const nameInverter = require(`../nameInverter.js`);

// Tests
// Empty String
describe(`nameInverter`, function() {
  assert(nameInverter(``) === ``, `return an empty string when passed an empty string`);
});
// Single name
describe(`nameInverter`, function() {
  assert(nameInverter(`name`) === `name`, `return a single name when passed a single name`);
});
// Single name with extra spaces
describe(`nameInverter`, function() {
  assert(nameInverter(` name `) === `name`, `return a single name when passed a single name with extra spaces`);
});
// Return a last-name, first-name when passed a first and last-name
describe(`nameInverter`, function() {
  assert(nameInverter(`first last`) === `last, first`, `return a last-name, first-name when passed a first and last-name`);
});
// Return a last-name, first-name when contains extra spaces around names
describe(`nameInverter`, function() {
  assert(nameInverter(` first last`) === `last, first`, `Stretch: return a last-name, first-name when passed a first and last-name with extra spaces around the names`);
});
// empty if only honorific
describe(`nameInverter`, function() {
  assert(nameInverter(`Dr. `) === ``, `return an empty string when passed a single honorific`);
});
// honorific with first name only
describe(`nameInverter`, function() {
  assert(nameInverter(`Dr. First`) === `Dr. First`, `return honorific first-name when passed honorific first-name`);
});
// honorific with first and last name
describe(`nameInverter`, function() {
  assert(nameInverter(`Dr. first-name last-name`) === `Dr. last-name, first-name`);
});
// honorific with first, last and extra spaces
describe(`nameInverter`, function() {
  assert(nameInverter(`Dr. first-name last-name `) === `Dr. last-name, first-name`, `return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces`);
});
// undefined
describe(`nameInverter`, function() {
  assert.throws(nameInverter(undefined), `Error`);
});