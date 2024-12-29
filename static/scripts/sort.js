const openEventModal =document.getElementById('open-event-modal');
const closeEventModal = document.getElementById('close-event-modal');
const eventModal = document.getElementById('event-modal');

const openDateModal = document.getElementById('open-date-modal');
const closeDateModal = document.getElementById('close-date-modal');
const dateModal = document.getElementById('date-modal');



const dateFrom = document.getElementById('date-from');
const dateTo = document.getElementById('date-to');

openEventModal.addEventListener('click',function()
{
    eventModal.showModal();
    eventModal.style.display ='block';
})
closeEventModal.addEventListener('click',function(event)
{
    event.preventDefault();    
    eventModal.close();
    eventModal.style.display ='none';
});

openDateModal.addEventListener('click',function()
{
    dateModal.showModal();
    dateModal.style.display ='block';
});

closeDateModal.addEventListener('click',function(event)
{
    event.preventDefault();
    dateModal.close();
    dateModal.style.display ='none';
});
// Function to get today's date in YYYY-MM-DD format
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}


const todayDate = getTodayDate();

dateFrom.value = todayDate;
dateTo.value = todayDate;



dateFrom.addEventListener('change', function() {
    if (!dateTo.value) {
        dateTo.value = dateFrom.value;
    }
    else if (dateTo.value < dateFrom.value) {
        dateTo.value = dateFrom.value;
    }
});
dateTo.addEventListener('change', function() {
    if (!dateFrom.value) {
        dateFrom.value = dateTo.value;
    }
    else if (dateFrom.value > dateTo.value) {
        dateFrom.value = dateTo.value;
    } 
});