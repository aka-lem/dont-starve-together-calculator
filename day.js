class Day {
  #autumnSpringDayCounts = 20;
  #winterSummerDayCounts = 15;
  #daysInAYear = 70;
  #lastDayOfAutumn = 20;
  #lastDayOfWinter = 35;
  #lastDayOfSpring = 55;
  #autumn = "Autumn";
  #winter = "Winter";
  #spring = "Spring";
  #summer = "Summer";

  constructor(days) {
    this.days = days;
    this.yearProgress = days % this.#daysInAYear;
    this.currentSeasonDay = this.#calculateCurrentSeasonDay();
    this.currentSeason = this.#calculateCurrentSeason();
    this.years = this.#calculateYears();
  }

  #calculateCurrentSeasonDay() {
    let currentDay = 0; // Initialize as a number
    if (this.yearProgress > this.#lastDayOfSpring) {
      currentDay = this.yearProgress - this.#lastDayOfSpring;
    } else if (this.yearProgress > this.#lastDayOfWinter) {
      currentDay = this.yearProgress - this.#lastDayOfWinter;
    } else if (this.yearProgress > this.#lastDayOfAutumn) {
      currentDay = this.yearProgress - this.#lastDayOfAutumn;
    } else {
      currentDay = this.yearProgress;
    }
    this.ordinalIndicator = this.#setOrdinalIndicator(currentDay); // Calculate here
    return currentDay + this.ordinalIndicator;
  }

  #calculateYears() {
    return Math.floor(this.days / this.#daysInAYear);
  }

  #calculateCurrentSeason() {
    if (this.yearProgress > this.#lastDayOfSpring) {
      return this.#summer;
    } else if (this.yearProgress > this.#lastDayOfWinter) {
      return this.#spring;
    } else if (this.yearProgress > this.#lastDayOfAutumn) {
      return this.#winter;
    } else {
      return this.#autumn;
    }
  }

  #setOrdinalIndicator(currentDay) {
    if (currentDay === 1) {
      return "st";
    } else if (currentDay === 2) {
      return "nd";
    } else if (currentDay === 3) {
      return "rd";
    } else {
      return "th";
    }
  }

  getYearProgress() {
    return this.yearProgress;
  }

  getCurrentSeasonDay() {
    return this.currentSeasonDay;
  }

  getOrdinalIndicator() {
    return this.ordinalIndicator;
  }

  getCurrentSeason() {
    return this.currentSeason;
  }

  getYears() {
    return this.years;
  }
}

export default Day;
