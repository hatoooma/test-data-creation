const genStrings = require("./random-string");

const testDataCreator = { genStrings };

const x = {
  // optional
  regex: "",
  testCase: "POSITIVE_CASE",

  // Optional
  format: {
    en: false,
    case: "MIXED",
    enNum: false,
    ar: true,
    arNum: false,
    specialChars: false,
    spaces: true,
    length: { min: 10, max: 10 },
  },
};
console.log(genStrings(x, 5));

const gg = {
  hatem: "ssdd",
  lol: "sssssssssss",
};

const { hatem, lol } = gg;

console.log(hatem);
console.log(lol);

module.exports = testDataCreator;
