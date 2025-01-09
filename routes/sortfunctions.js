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
    
    console.log(selectedEventTypes);
    return eventsData;
}
function sortByDate(eventsData,dateFrom,dateTo)
{
     
    dateFrom = new Date(dateFrom);
    dateTo = new Date(dateTo);
    
    console.log( dateFrom , dateTo);
    
    for (let eventKey in eventsData)
    {
        
        let eventDate =new Date(eventsData[eventKey].date);
        console.log("\n",eventDate ,eventDate < dateFrom || eventDate > dateTo);
        if (eventDate < dateFrom || eventDate > dateTo)
            delete eventsData[eventKey];
        
    }    
        return eventsData;
}

export { sortByEvents, sortByDate };