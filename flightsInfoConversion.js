"strict";
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// _Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("+");
  for (const [i, row] of rows.entries()) {
    const restToLower = row.slice(2).toLowerCase();
    const bothCasesForDelayed = row[1] + restToLower;
    const underScore = bothCasesForDelayed.replaceAll("_", " ");
    const splitLine = underScore.split(";");
    const firstElement = splitLine[1].slice(0, 3).toUpperCase();
    const secondElement = splitLine[2].slice(0, 3).toUpperCase();
    const spacing = splitLine[0].padStart(15);

    // Adding time
    const time = splitLine[3].replace(":", "h");

    // Create capital for the second word of the "Delayed" messages
    const capitalLetterOfBeginElement = splitLine[0]
      .slice(8, 9)
      .replace(
        splitLine[0].slice(8, 9),
        splitLine[0].slice(8, 9).toUpperCase()
      );

    // Creating small letters for the second word of "Delayed" message
    const beginElementSmallLetters = splitLine[0].slice(9).toLowerCase();

    const missingDelayedWord = splitLine[0].slice(0, 7);
    const redDot = function () {
      return "🏮 " + missingDelayedWord;
    };

    // If the word "Delayed" features in the message then add a 🏮 next to the word
    if (underScore.includes("Delayed")) {
      console.log(
        underScore[i].replace(underScore[i], redDot()) +
          ` ${capitalLetterOfBeginElement}${beginElementSmallLetters} from ${firstElement} to ${secondElement} (${time})`
      );

      // If the word "Delayed" isn't in the message
    } else {
      console.log(
        `${spacing} from ${firstElement} to ${secondElement} (${time})`
      );
    }
  }
});
