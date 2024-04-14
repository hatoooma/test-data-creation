function generateString(stringFormat) {
  const engSmall = "abcdefghijklmnopqrstuvwxyz";
  const engCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const engNum = "0123456789";
  const ar = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي";
  const arNum = "٠١٢٣٤٥٦٧٨٩";
  const specialChars = "!@#$%^&*()_+{}|:<>?~`-=[]\\;',./";
  let generatedString = "";

  // Generate English letters
  if (stringFormat.eng) {
    if (stringFormat.case === "UPPER") {
      generatedString += engCapital;
    } else if (stringFormat.case === "LOWER") {
      generatedString += engSmall;
    } else {
      generatedString += Math.random() < 0.5 ? engCapital : engSmall;
    }
  }

  // Generate English numbers
  if (stringFormat.engNum) {
    generatedString += engNum;
  }

  // Generate Arabic letters
  if (stringFormat.ar) {
    generatedString += ar;
  }

  // Generate Arabic numbers
  if (stringFormat.arNum) {
    generatedString += arNum;
  }

  // Include special characters
  if (stringFormat.specialChars) {
    generatedString += specialChars;
  }

  // Include spaces
  if (stringFormat.spaces) {
    generatedString += " ";
  }

  // Generate string of desired length
  const length =
    Math.floor(
      Math.random() * (stringFormat.length.max - stringFormat.length.min + 1)
    ) + stringFormat.length.min;
  let finalString = "";
  for (let j = 0; j < length; j++) {
    const randomIndex = Math.floor(Math.random() * generatedString.length);
    finalString += generatedString[randomIndex];
  }

  return finalString;
}

function generateStrings(stringFormat, count) {
  return Array.from({ length: count }, () => generateString(stringFormat));
}

module.exports = generateStrings;
