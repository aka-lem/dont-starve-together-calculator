import Day from "./day.js";

function viewCalculation() {
  var totalDays = document.getElementById("days").value;
  var T = document.getElementById("calculations");
  var Z = document.getElementById("no_calculation");

  var day = new Day(Number(totalDays));

  document.getElementById("current_day").innerHTML = totalDays;
  document.getElementById("years").innerHTML = day.getYears();
  document.getElementById("season_day").innerHTML =
    day.getCurrentSeasonDayWithOrdinalIndicator();
  var currentSeasonElements = document.getElementsByClassName("current_season");
  for (var i = 0; i < currentSeasonElements.length; i++) {
    currentSeasonElements[i].innerHTML = day.getCurrentSeason();
  }
  document.getElementById("days_left_of_season").innerHTML =
    day.getDaysLeftOfSeason();
  document.getElementById("next_season").innerHTML = day.getNextSeason();
  document.getElementById("day_of_next_season").innerHTML =
    day.getDayOfNextSeason();

  if (totalDays > 0) {
    Z.style.display = "none";
    T.style.display = "block";
  } else {
    T.style.display = "none";
    Z.style.display = "block";
  }
}

function validateInput(event, input) {
  if (event.key === "0" && input.value === "") {
    return false;
  }
  if (event.key === "Backspace" || event.key === "Delete") {
    return true;
  }
  if (event.key >= "0" && event.key <= "9") {
    return true;
  }
  return false;
}

window.viewCalculation = viewCalculation;
window.validateInput = validateInput;
