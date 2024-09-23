import Day from "./day.js";
import Moon from "./moon.js"

function viewCalculation() {
  var totalDays = document.getElementById("days").value;
  var calculationDisplay = document.getElementById("calculations");
  if(totalDays > 0) {
    calculationDisplay.style.display = "block";
  } else {
    return;
  }

  var day = new Day(Number(totalDays));

  document.getElementById("years").innerHTML = day.getYears();
  document.getElementById("season_day").innerHTML = day.getCurrentSeasonDayWithOrdinalIndicator();
  var currentSeasonElements = document.getElementsByClassName("current_season");
  for (var i = 0; i < currentSeasonElements.length; i++) {
    currentSeasonElements[i].innerHTML = day.getCurrentSeason();
  }
  document.getElementById("days_left_of_season").innerHTML = day.getDaysLeftOfSeason();
  document.getElementById("next_season").innerHTML = day.getNextSeason();
  document.getElementById("day_of_next_season").innerHTML = day.getDayOfNextSeason();

  var moon = new Moon(day);

  document.getElementById("moon_phase").innerHTML = moon.getMoonPhase();
  document.getElementById("days_until_full_moon").innerHTML = moon.getDaysUntilNextFullMoon();
  document.getElementById("next_five_moons").innerHTML = moon.getNextFiveMoonPhases();
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

document.addEventListener("keydown", function(event) {
  if (event.key === 'Enter') {
      document.getElementById('calculate_button').click();
  }
});

document.addEventListener("keydown", function(event) {
  const input = document.getElementById('days');
  const currentValue = parseInt(input.value) || 0; 
  if (event.key === "ArrowUp") {
      event.preventDefault();
      input.value = Math.max(currentValue + 1, 1); 
  } else if (event.key === "ArrowDown") {
      event.preventDefault();
      input.value = Math.max(currentValue - 1, 1); 
  }
});

window.viewCalculation = viewCalculation;
window.validateInput = validateInput;
