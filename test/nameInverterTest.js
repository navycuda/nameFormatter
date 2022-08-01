// Require
const chai = require(`chai`);
const assert = chai.assert;
const nameInverter = require(`../nameInverter.js`);

// Tests
describe(`nameInverter(name)`, function() {
  // Empty String
  it(`return an empty string when passed an empty string`, function() {
    assert.isTrue(nameInverter(``) === ``);
  });
  // Single name
  it(`return a single name when passed a single name`, function() {
    assert.isTrue(nameInverter(`name`) === `name`);
  });
  // Single name with extra spaces
  it(`return a single name when passed a single name with extra spaces`, function() {
    assert.isTrue(nameInverter(` name `) === `name`);
  });
  // Return a last-name, first-name when passed a first and last-name
  it(`return a last-name, first-name when passed a first and last-name`, function() {
    assert.isTrue(nameInverter(`first last`) === `last, first`);
  });
  // Return a last-name, first-name when contains extra spaces around names
  it(`Stretch: return a last-name, first-name when passed a first and last-name with extra spaces around the names`, function() {
    assert.isTrue(nameInverter(` first last`) === `last, first`);
  });
  // empty if only honorific
  it(`return an empty string when passed a single honorific`, function() {
    assert.isTrue(nameInverter(`Dr. `) === ``);
  });
  // honorific with first name only
  it(`return honorific first-name when passed honorific first-name`, function() {
    assert.isTrue(nameInverter(`Dr. First`) === `Dr. First`);
  });
  // honorific with first and last name
  it(`return a honorific last-name, first-name when passed honorific first-name last-name`, function() {
    assert.isTrue(nameInverter(`Dr. first-name last-name`) === `Dr. last-name, first-name`);
  });
  // honorific with first, last and extra spaces
  it(`return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces`, function() {
    assert.isTrue(nameInverter(`Dr. first-name last-name `) === `Dr. last-name, first-name`);
  });
  // undefined
  it(`throw an error when name is undefined`, function() {
    assert.isTrue.throws(nameInverter(undefined), `Error`);
  });
});