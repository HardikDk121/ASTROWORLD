

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
    fetch(`/api/events?month=${monthIndex+1}&year=${year}`)
    .then(response =>
    {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(jsondata =>{
        console.log( typeof jsondata);
        return JSON.parse(jsondata);
    })
    .then(data =>
        {
            console.log(data);
            var container = document.getElementById('day-container'); // Assuming you have a container for the day divs.
            container.innerHTML = ' '; // Clear previous divs.
        
            // Generate the new divs for each day in the selected month.
            for (let i = 1; i <= daysInMonth; i++) {
                var dayDiv = document.createElement('div');
                dayDiv.classList.add('day');
                dayDiv.innerHTML = '<p class="date">'+i + '</p>';
                
                
                var eventsDiv = document.createElement('div');
                eventsDiv.classList.add('events');
                for (let j = 0; j < data.length; j++)
                {
                    let date =parseInt(data[j].date.slice(3,5));
                    console.log(typeof date);
                    if (date === i)
                    {
                        
                        data[j].events.forEach(event => {
                            var eventDiv = document.createElement('p');
                            eventDiv.classList.add('event');
                            eventDiv.textContent = event;
                            eventsDiv.appendChild(eventDiv);
                        });    
                    }
                }
               /* if (empty)
                    {
                        var img = document.createElement('img');
                        img.src='/images/logo/face-unamused.png';
                        img.style.width = '100%';
                        img.style.height='100%';
                        img.style.objectFit='cover';
                        eventsDiv.appendChild(img);
                    }*/
                // Create the first event (Eclipse)
                
        
                dayDiv.appendChild(eventsDiv);
                
                container.appendChild(dayDiv);
            }
            
            // Update the display for month and year (assuming you have a year element)
            document.getElementById('currentMonth').textContent = monthname[monthIndex];
            document.getElementById('currentYear').textContent = year;
        })
    .catch(error => console.error('Error:', error))
    // Clear the existing divs and add new ones based on the number of days.
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


