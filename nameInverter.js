// Required
// Functions
const removeSpace = function(char) {
  return char !== ` ` ? char : ``;
};
const cleanExcessSpaces = function(string) {
  let result = "";
  const length = string.length;
  for (let s = 0; s < length; s++) {
    const char = string[s];
    if (s === 0) {
      result += removeSpace(char);
    } else if (s === length - 1) {
      result += removeSpace(char);
    } else if (string[s - 1] === ` ` || string[s + 1] === ` `) {
      result += removeSpace(char);
    } else {
      result += char;
    }
  }
  return result;
};
const isHonorific = function(name) {
  const honorificTitles = [ `Mr.`, `Mrs.`, `Ms.`, `Dr.` ];
  for (let h = 0; h < honorificTitles.length; h++) {
    if (name.contains(honorificTitles[h])) {
      return true;
    }
  }
  return false;
};
const nameInverter = function(name) {
  const cleanedName = cleanExcessSpaces(name);




  return cleanExcessSpaces(name);
};
// Execution

// Exports
module.exports = nameInverter;