export function checkWeekday(date){
    let comparisonDate = new Date("3/24/2019");
    let differenceInDays = (parseFloat((((comparisonDate-date)/86400000)%7).toFixed(0))+7)%7;
    const days =["Sunday", "Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday"];
    return days[differenceInDays];
}

export function isValidDate(date){
    return(date != "Invalid Date");
}

