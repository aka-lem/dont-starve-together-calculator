class Day {

  #days;
  #yearProgress;
  #currentSeasonDay;
  #currentSeason;
  #daysLeftOfSeason;
  #nextSeason;
  #ordinalIndicator;
  #currentSeasonDayWithOrdInd;
  #years;
  #dayOfNextSeason;

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
  #extraDay = 1;

  constructor(days) {
    this.#days = days;
    this.#yearProgress = this.#setYearProgress();
    this.#currentSeasonDay = this.#setCurrentSeasonDay();
    this.#currentSeason = this.#setCurrentSeason();
    this.#daysLeftOfSeason = this.#setDaysLeftOfSeason();
    this.#nextSeason = this.#setNextSeason();
    this.#ordinalIndicator = this.#setOrdinalIndicator();
    this.#currentSeasonDayWithOrdInd = this.#setDayWithOrdinalIndicator();
    this.#years = this.#setYears();
    this.#dayOfNextSeason = this.#setDayOfNextSeason();
  }

  #setYearProgress() {
    var yearProgress = this.#days % this.#daysInAYear;
    if (yearProgress == 0) {
      yearProgress = this.#daysInAYear;
    }
    return yearProgress;
  }

  #setCurrentSeasonDay() {
    let currentDay = 0;
    if (this.#yearProgress > this.#lastDayOfSpring) {
      currentDay = this.#yearProgress - this.#lastDayOfSpring;
    } else if (this.#yearProgress > this.#lastDayOfWinter) {
      currentDay = this.#yearProgress - this.#lastDayOfWinter;
    } else if (this.#yearProgress > this.#lastDayOfAutumn) {
      currentDay = this.#yearProgress - this.#lastDayOfAutumn;
    } else {
      currentDay = this.#yearProgress;
    }
    return currentDay;
  }

  #setDayWithOrdinalIndicator() {
    return this.#currentSeasonDay + this.#ordinalIndicator;
  }

  #setYears() {
    return Math.floor(this.#days / this.#daysInAYear);
  }

  #setCurrentSeason() {
    if (this.#yearProgress > this.#lastDayOfSpring) {
      return this.#summer;
    } else if (this.#yearProgress > this.#lastDayOfWinter) {
      return this.#spring;
    } else if (this.#yearProgress > this.#lastDayOfAutumn) {
      return this.#winter;
    } else {
      return this.#autumn;
    }
  }

  #setOrdinalIndicator() {
    if (this.#currentSeasonDay === 1) {
      return "st";
    } else if (this.#currentSeasonDay === 2) {
      return "nd";
    } else if (this.#currentSeasonDay === 3) {
      return "rd";
    } else {
      return "th";
    }
  }

  #setDaysLeftOfSeason() {
    if (
      this.#currentSeason == this.#autumn ||
      this.#currentSeason == this.#spring
    ) {
      return this.#autumnSpringDayCounts - this.#currentSeasonDay;
    } else {
      return this.#winterSummerDayCounts - this.#currentSeasonDay;
    }
  }

  #setNextSeason() {
    if (this.#currentSeason == this.#autumn) {
      return this.#winter;
    } else if (this.#currentSeason == this.#winter) {
      return this.#spring;
    } else if (this.#currentSeason == this.#spring) {
      return this.#summer;
    } else {
      return this.#autumn;
    }
  }

  #setDayOfNextSeason() {
    return this.#daysLeftOfSeason + this.#days + this.#extraDay;
  }

  getDays() {
    return this.#days;
  }

  getDaysLeftOfSeason() {
    return this.#daysLeftOfSeason;
  }

  getYearProgress() {
    return this.#yearProgress;
  }

  getCurrentSeasonDay() {
    return this.#currentSeasonDay;
  }

  getOrdinalIndicator() {
    return this.#ordinalIndicator;
  }

  getCurrentSeason() {
    return this.#currentSeason;
  }

  getYears() {
    return this.#years;
  }

  getCurrentSeasonDayWithOrdinalIndicator() {
    return this.#currentSeasonDayWithOrdInd;
  }

  getNextSeason() {
    return this.#nextSeason;
  }

  getDayOfNextSeason() {
    return this.#dayOfNextSeason;
  }

  getSeasonIconPath(){
    if(this.#currentSeason == this.#autumn){
      return "./assets/images/season icons/autumn.png";
    } else if(this.#currentSeason == this.#spring){
      return "./assets/images/season icons/spring.png";
    } else if(this.#currentSeason == this.#summer) {
      return "./assets/images/season icons/summer.png";
    } else {
      return "./assets/images/season icons/winter.png";
    }
  }
}

export default Day;
