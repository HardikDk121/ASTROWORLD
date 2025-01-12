function datefilter(eventsData, dateFrom, dateTo)
{
    for (let eventKey in eventsData)
        {            
            let eventDate =new Date(eventsData[eventKey].date);   
            if (eventDate < dateFrom || eventDate > dateTo)
                delete eventsData[eventKey];           
        }
    eventsData = eventsData.filter(element => element != null);
    return eventsData  
}

export { datefilter } ;