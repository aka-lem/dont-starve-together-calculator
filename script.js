import Day from "./day.js";

function viewCalculation() {
  console.log("viewCalculation called");
  var totalDays = document.getElementById("days").value;
  var T = document.getElementById("calculations");
  var Z = document.getElementById("no_calculation");

  var day = new Day(Number(totalDays));

  document.getElementById("current_day").innerHTML = totalDays;
  document.getElementById("years").innerHTML = day.getYears();
  document.getElementById("season_day").innerHTML = day.getCurrentSeasonDay();
  document.getElementById("current_season").innerHTML = day.getCurrentSeason();

  if (totalDays > 0) {
    Z.style.display = "none";
    T.style.display = "block";
  } else {
    T.style.display = "none";
    Z.style.display = "block";
  }
}

window.viewCalculation = viewCalculation;