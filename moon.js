import Day from "./day.js";
class Moon {
    #MOON_PHASE_LENGTH = 20;
    #NEW_MOON = "New Moon";
    #QUARTER_MOON = "Quarter Moon";
    #HALF_MOON = "Half Moon";
    #WAXING_GIBBOUS_MOON = "3/4 (Waxing Gibbous) Moon";
    #FULL_MOON = "Full Moon";
    #WANING_GIBBOUS_MOON = "3/4 (Waning Gibbous) Moon";
    constructor(day) {
        if (!(day instanceof Day)) {
            throw new Error('Expected an instance of Day.');
        }
        this.day = day;
        this.moonDay = day.getDays();
    }
}