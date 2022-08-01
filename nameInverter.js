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
  for (let n = 0; n < name.length; n++) {
    for (let h = 0; h < honorificTitles.length; h++) {
      if (name[n] === honorificTitles[h]) {
        return true;
      }
    }
  }
  return false;
};
const nameInverter = function(name) {
  
  // Clean the name of excess spaces and convert to array
  const cleanedName = cleanExcessSpaces(name).split(` `);
  // Get the length of the name array
  const length = cleanedName.length;
  // Check if the array is honorific
  const honorific = isHonorific(cleanedName);
  if (honorific) {
    if (length === 1) {
      return ``;
    } else if (length === 2) {
      return cleanedName[0] + ` ` + cleanedName[1];
    } else if (length === 3) {
      return cleanedName[0] + ` ` + cleanedName[2] + `, ` + cleanedName[1];
    }
  }
  if (length === 1) {
    return cleanedName[0];
  }
  if (length === 2) {
    return cleanedName[1] + `, ` + cleanedName[0];
  }
  return "";
};
// Execution

// Exports
module.exports = nameInverter;