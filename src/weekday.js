export function checkWeekDay(date){
    let comparisonDate = new Date("3/24/2019");
    let differenceInDays = (parseInt(((date-date2)%7).toFixed(0))+7)%7;
    const days =["Sunday", "Saturday", "Friday", "Thursday", "Wednesday", "Tueday", "Monday"];
}

export function isValidDate(date){
    return(date != "Invalid Date");
}

