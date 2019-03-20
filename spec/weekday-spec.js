import { isValidDate, checkWeekday } from '../src/weekday.js';

describe('Weekday', function(){

    console.log("test");
    it('tests if date is valid: passing invalid valid', function(){
        let date = new Date("string");
        expect(isValidDate(date)).toEqual(false);
    });

    it('tests if date is valid: passing valid date', function(){
        let date = new Date(2019, 3, 20);
        expect(isValidDate(date)).toEqual(true);
    });

    it('test checkWeekday if it returns the correct day of the week', function(){
        let date = new Date(2019, 2, 20);
        console.log(date);
        expect(checkWeekday(date)).toEqual('Wednesday');
    })
});