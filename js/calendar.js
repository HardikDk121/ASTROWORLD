
const monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const today = new Date();
const currentMonth = monthname[today.getMonth()];
const monthspan = document.getElementById('currentMonth');
monthspan.textContent = currentMonth;

var back = document.getElementById('back');
var forward = document.getElementById('forward');
back.addEventListener('click',function () 
{

    var month = monthname.indexOf(monthspan.textContent);
    if (month == 0)
    {
        
    }
    var previousmonth = monthname[month - 1];
    monthspan.textContent = previousmonth;
});
    forward.addEventListener('click',function()
{
    var month =monthname.indexOf(monthspan.textContent);
    var nextmonth = monthname[month + 1];
    monthspan.textContent = nextmonth;
});



