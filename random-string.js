const RandExp = require("randexp");
const generateStrings = require("./helper");

// Generate random strings based on the schema and count
/* schema: should be object like {
  // optional
  regex: /regex/,
  testCase: "POSITIVE_CASE" or "NEGATIVE_CASE",

  // Optional
  format: {
    eng: true,
    case: "UPPER" or "LOWER" or "MIXED",
    engNum: true,
    ara: true,
    araNum: true,
    specialChars: true,
    spaces: true,
    length: {min: 1, max: 10},
  }
} 
*/

function genStrings(schema, count) {
  const randomStrings = [];
  if (schema.regex) {
    if (schema.testCase === "POSITIVE_CASE") {
      // Generate strings that match the regex pattern
      for (let i = 0; i < count; i++) {
        const randExp = new RandExp(schema.regex);
        randomStrings.push(randExp.gen());
      }
    } else {
      // Negate the regex pattern
      const negatedRegex = new RegExp(`^(?!${schema.regex.source}).*$`);

      // Generate strings that don't match the regex pattern
      for (let i = 0; i < count; i++) {
        const randExp = new RandExp(negatedRegex);
        randomStrings.push(randExp.gen());
      }
    }
    return randomStrings;
  } else if (schema.format) {
    return generateStrings(schema.format, count);
  } else {
    throw new Error("Invalid schema provided");
  }
}

module.exports = genStrings;
