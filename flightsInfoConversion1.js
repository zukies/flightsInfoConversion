// This is my second try after looking at lecturers answer to this challenge

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
