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

    #moonPhaseMap = {
        1: this.#newMoon,
        2: this.#waxingCrescentMoon, 3: this.#waxingCrescentMoon, 4: this.#waxingCrescentMoon,
        5: this.#halfMoon, 6: this.#halfMoon, 7: this.#halfMoon,
        8: this.#waxingGibbousMoon, 9: this.#waxingGibbousMoon, 10: this.#waxingGibbousMoon,
        11: this.#fullMoon,
        12: this.#waningGibbousMoon, 13: this.#waningGibbousMoon, 14: this.#waningGibbousMoon,
        15: this.#halfMoon, 16: this.#halfMoon, 17: this.#halfMoon,
        18: this.#waningCrescentMoon, 19: this.#waningCrescentMoon, 20: this.#waningCrescentMoon
    };

    #day;
    #moonDay;
    #moonPhase;
    #daysUntilNextFullMoon;
    #nextFiveMoonPhases;
    constructor(day) {
        if (!(day instanceof Day)) {
            throw new Error('Expected an instance of Day.');
        }
        this.#day = day.getDays();
        this.#moonDay = this.#setMoonDay(this.#day);
        this.#moonPhase = this.#setMoonPhase();
        this.#daysUntilNextFullMoon = this.#setDaysUntilNextFullMoon();
        this.#nextFiveMoonPhases = this.#setNextFiveMoonPhases();
    }

    #setMoonDay(day){
        var moonDay = day % this.#moonPhaseLength;
        if(moonDay == 0){
            moonDay = this.#moonPhaseLength;
        }
        return moonDay;
    }

    #setMoonPhase(){
        return this.#moonPhaseMap[this.#moonDay];
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

    #nextFiveMoonPhaseDays(){
        var nextDays = [];
        var nextDay = this.#moonDay + 1;
        for(let i = 0; i <= 5; i++){
            nextDays.push(this.#setMoonDay(nextDay))
            nextDay++;
            nextDay = this.#setMoonDay(nextDay);
        }
        return nextDays;
    }

    #setNextFiveMoonPhases(){
        var nextPhases = [];
        var nextFiveDays = this.#nextFiveMoonPhaseDays();
        for(let i = 0; i < 5; i++){
            nextPhases.push(this.#moonPhaseMap[nextFiveDays[i]])
        }
        return nextPhases;
    }

    getMoonPhase(){
        return this.#moonPhase;
    }

    getDaysUntilNextFullMoon(){
        return this.#daysUntilNextFullMoon;
    }

    getNextFiveMoonPhases(){
        return this.#nextFiveMoonPhases;
    }

    getMoonIconPath(moonPhase){
        if(moonPhase == this.#newMoon){
            return "./assets/images/moon icons/newmoon.png";
        } else if(moonPhase == this.#halfMoon){
            return "./assets/images/moon icons/halfmoon.png";
        } else if(moonPhase == this.#waxingCrescentMoon || moonPhase == this.#waningCrescentMoon){
            return "./assets/images/moon icons/crescentmoon.png";
        } else if(moonPhase == this.#waxingGibbousMoon || moonPhase == this.#waningGibbousMoon){
            return "./assets/images/moon icons/gibbousmoon.png";
        } else{
            return "./assets/images/moon icons/fullmoon.png";
        }
    }
}

export default Moon;