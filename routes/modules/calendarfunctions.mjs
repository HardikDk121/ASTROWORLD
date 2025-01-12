import { datefilter } from "./datefilter.mjs";

function calendar(month,year,eventsData) 
{
    let monthDays = getDaysInMonth(month, year);
    let startDate = new Date(`${year}-${month}-01`);
    let endDate = new Date(`${year}-${month}-${monthDays}`);
    eventsData = datefilter(eventsData,startDate,endDate);
    return eventsData;
}

function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

export { calendar };