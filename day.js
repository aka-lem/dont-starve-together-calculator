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
    this.currentSeasonDay = this.#setCurrentSeasonDay();
    this.ordinalIndicator = this.#setOrdinalIndicator();
    this.currentSeasonDayWithOrdInd = this.#setDayWithOrdinalIndicator();
    this.currentSeason = this.#setCurrentSeason();
    this.years = this.#setYears();
    this.daysLeftOfSeason = this.#setDaysLeftOfSeason();
  }

  #setCurrentSeasonDay() {
    let currentDay = 0;
    if (this.yearProgress > this.#lastDayOfSpring) {
      currentDay = this.yearProgress - this.#lastDayOfSpring;
    } else if (this.yearProgress > this.#lastDayOfWinter) {
      currentDay = this.yearProgress - this.#lastDayOfWinter;
    } else if (this.yearProgress > this.#lastDayOfAutumn) {
      currentDay = this.yearProgress - this.#lastDayOfAutumn;
    } else {
      currentDay = this.yearProgress;
    }
    return currentDay;
  }

  #setDayWithOrdinalIndicator() {
    return this.currentSeasonDay + this.ordinalIndicator;
  }

  #setYears() {
    return Math.floor(this.days / this.#daysInAYear);
  }

  #setCurrentSeason() {
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

  #setOrdinalIndicator() {
    if (this.currentSeasonDay === 1) {
      return "st";
    } else if (this.currentSeasonDay === 2) {
      return "nd";
    } else if (this.currentSeasonDay === 3) {
      return "rd";
    } else {
      return "th";
    }
  }

  #setDaysLeftOfSeason(){
    if(this.currentSeason == this.#autumn || this.currentSeason == this.#spring){
      return this.#autumnSpringDayCounts - this.currentSeasonDay;
    } else {
      return this.#winterSummerDayCounts - this.currentSeasonDay;
    }
  }

  getDaysLeftOfSeason(){
    return this.daysLeftOfSeason;
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

  getCurrentSeasonDayWithOrdinalIndicator(){
    return this.currentSeasonDayWithOrdInd;
  }
}

export default Day;
