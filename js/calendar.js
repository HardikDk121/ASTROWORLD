
const monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const monthspan = document.getElementById('currentMonth');

var back = document.getElementById('back');
var forward = document.getElementById('forward');

function updateMonthDays(monthIndex, year) {
    // Function to get the number of days in a given month and year (for February leap year check).
    function getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }
    
    // Get the number of days in the selected month.
    var daysInMonth = getDaysInMonth(monthIndex, year);

    // Clear the existing divs and add new ones based on the number of days.
    var container = document.getElementById('day-container'); // Assuming you have a container for the day divs.
    container.innerHTML = ' '; // Clear previous divs.

    // Generate the new divs for each day in the selected month.
    for (var i = 1; i <= daysInMonth; i++) {
        var dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.textContent = i;
        
        var eventsDiv = document.createElement('div');
        eventsDiv.classList.add('events');
        
        // Create the first event (Eclipse)
        var event1 = document.createElement('p');
        event1.classList.add('event');
        event1.textContent = 'Eclipse';

        // Create the second event (Meteor shower)
        var event2 = document.createElement('p');
        event2.classList.add('event');
        event2.textContent = 'meteor shower';

        eventsDiv.appendChild(event1);
        eventsDiv.appendChild(event2);

        dayDiv.appendChild(eventsDiv);
        
        container.appendChild(dayDiv);
    }
    
    // Update the display for month and year (assuming you have a year element)
    document.getElementById('currentMonth').textContent = monthname[monthIndex];
    document.getElementById('currentYear').textContent = year;
}


document.addEventListener('DOMContentLoaded', function() {
    var today = new Date(); // Get the current date
    updateMonthDays(today.getMonth(), today.getFullYear()); // Call getFullYear() with parentheses
});


back.addEventListener('click', function () {
    var month = monthname.indexOf(monthspan.textContent);
    var year = parseInt(document.getElementById('currentYear').textContent, 10);

    if (month == 0) {
        // If it's January, go to December of the previous year
        month = 11; // December
        year -= 1; // Previous year
    } else {
        // Otherwise, just go to the previous month
        month -= 1;
    }

    // Call the function to update the number of days for the previous month and year
    updateMonthDays(month, year);
});


forward.addEventListener('click', function () {
    var month = monthname.indexOf(monthspan.textContent);
    var year = parseInt(document.getElementById('currentYear').textContent, 10);

    if (month == 11) {
        // If it's December, go to January of the next year
        month = 0; // January
        year += 1; // Next year
    } else {
        // Otherwise, just go to the next month
        month += 1;
    }

    // Call the function to update the number of days for the next month and year
    updateMonthDays(month, year);
});


