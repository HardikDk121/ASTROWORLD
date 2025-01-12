import { datefilter } from "./datefilter.mjs";
function sortByEvents(eventsData, query) {
    let selectedEventTypes = [];
    
    for (let filterKey in query) {  
        if (query[filterKey] === 'on') {
            selectedEventTypes.push(filterKey.replaceAll("_", " "));    
        }
    }
    for (let eventKey in eventsData) {       
        if (!eventsData[eventKey].events.some(event => selectedEventTypes.includes(event))) {
            delete eventsData[eventKey];       
        }
    }
    
    return eventsData;
}
function sortByDate(eventsData,dateFrom,dateTo)
{
     
    dateFrom = new Date(dateFrom);
    dateTo = new Date(dateTo);

    eventsData = datefilter(eventsData,dateFrom,dateTo);

    
       
    return eventsData;
}

export { sortByEvents, sortByDate };