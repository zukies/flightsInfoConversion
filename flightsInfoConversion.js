"strict";

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

//////////////////////////////////////////////////////////////////////
//This is my second try after looking at lecturers answer to this challenge, 
I coded this without looking at his answer during the project
//////////////////////////////////////////////////////////////////////

"use strict";
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const flights = text;
  const goTo = (param) => param.slice(0, 3).toUpperCase();
  for (const flight of flights.split("+")) {
    const [typeOf, from, to, time] = flight.split(";");

    const type = typeOf.replaceAll("_", " ");
    const delayed = type.startsWith(" Delayed")
      ? type.replace(" ", "🔴 ")
      : type.replace(" ", "").padStart(20, " ");

    console.log(
      `${delayed} from ${goTo(from)} to ${goTo(to)} (${time.replace(":", "h")})`
    );
  }
});
