function generateString(stringFormat) {
  const enSmall = "abcdefghijklmnopqrstuvwxyz";
  const enCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const enNum = "0123456789";
  const ar = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي";
  const arNum = "٠١٢٣٤٥٦٧٨٩";
  const specialChars = "!@#$%^&*()_+{}|:<>?~`-=[]\\;',./";
  let generatedString = "";

  // Generate English letters
  if (stringFormat.en) {
    if (stringFormat.case === "UPPER") {
      generatedString += enCapital;
    } else if (stringFormat.case === "LOWER") {
      generatedString += enSmall;
    } else {
      generatedString += Math.random() < 0.5 ? enCapital : enSmall;
    }
  }

  // Generate English numbers
  if (stringFormat.enNum) {
    generatedString += enNum;
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
    generatedString += "          ";
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
