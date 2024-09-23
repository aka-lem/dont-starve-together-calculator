import Day from "./day.js";

class Moon {
    #moonPhaseLength = 20;
    #fullMoonDay = 11;
    #newMoon = "New Moon";
    #waxingCrescentMoon = "Quarter (Waxing Crescent) Moon";
    #halfMoon = "Half Moon";
    #waxingGibbousMoon = "3/4 (Waxing Gibbous) Moon";
    #fullMoon = "Full Moon";
    #waningGibbousMoon = "3/4 (Waning Gibbous) Moon";
    #waningCrescentMoon = "Quarter (Waning Crescent) Moon";

    #day;
    #moonDay;
    #moonPhase;
    #daysUntilNextFullMoon;
    constructor(day) {
        if (!(day instanceof Day)) {
            throw new Error('Expected an instance of Day.');
        }
        this.#day = day.getDays();
        this.#moonDay = this.#setMoonDay();
        this.#moonPhase = this.#setMoonPhase();
        this.#daysUntilNextFullMoon = this.#setDaysUntilNextFullMoon();
    }

    #setMoonDay(){
        var moonDay = this.#day % this.#moonPhaseLength;
        if(moonDay == 0){
            moonDay = this.#moonPhaseLength;
        }
        return moonDay;
    }

    #setMoonPhase(){
        var moonPhaseMap = {
            1: this.#newMoon,
            2: this.#waxingCrescentMoon, 3: this.#waxingCrescentMoon, 4: this.#waxingCrescentMoon,
            5: this.#halfMoon, 6: this.#halfMoon, 7: this.#halfMoon,
            8: this.#waxingGibbousMoon, 9: this.#waxingGibbousMoon, 10: this.#waxingGibbousMoon,
            11: this.#fullMoon,
            12: this.#waningGibbousMoon, 13: this.#waningGibbousMoon, 14: this.#waningGibbousMoon,
            15: this.#halfMoon, 16: this.#halfMoon, 17: this.#halfMoon,
            18: this.#waningCrescentMoon, 19: this.#waningCrescentMoon, 20: this.#waningCrescentMoon
        };

        return moonPhaseMap[this.#moonDay];
    }

    #setDaysUntilNextFullMoon(){
        if(this.#moonDay < this.#fullMoonDay){
            return this.#fullMoonDay - this.#moonDay;
        } else if(this.#moonDay == this.#fullMoonDay){
            return 0;
        } else {
            return this.#moonPhaseLength - this.#moonDay + this.#fullMoonDay;
        }
    }

    getMoonPhase(){
        return this.#moonPhase;
    }

    getDaysUntilNextFullMoon(){
        return this.#daysUntilNextFullMoon;
    }
}

export default Moon;