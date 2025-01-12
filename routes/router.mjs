import express from 'express'
import { JSONPath } from './modules/JSONPath.mjs';
import { sortByEvents ,sortByDate } from './modules/sortfunctions.mjs';
import { calendar } from './modules/calendarfunctions.mjs';
const router = express.Router();

router.get('/', (req, res) => {

    res.render('index.ejs');
});

router.get('/calendar', (req, res) =>
{
    res.render('calendar.ejs');
});

router.get('/api/events', (req, res) =>
{
    let month , year;
    const eventsJSON = JSONPath;
    let eventsData = JSON.parse(eventsJSON);
    if (req.query.month&&req.query.year){
        month = req.query.month;
        year = req.query.year;
    }
    else
    {
        let today = new Date();
        month = today.getMonth() + 1;
        year = today.getFullYear();
    }   
    
    eventsData = calendar(month,year,eventsData);
    eventsData = JSON.stringify(eventsData);
    res.json(eventsData);
});

router.get('/sort', (req, res) => {
    
    const eventsJSON = JSONPath;
    let eventsData = JSON.parse(eventsJSON);

    if (0 < Object.keys(req.query).length )
    {
        if (req.query.dateFrom && req.query.dateTo)
        {
            eventsData = sortByDate(eventsData,req.query.dateFrom,req.query.dateTo);
        }
        else
            eventsData = sortByEvents(eventsData,req.query);
    }
    else
    {
        let year =new Date().getFullYear();
        let startDate =`${year}-01-01`;
        let endDate = `${year}-12-31`;
        eventsData = sortByDate(eventsData,startDate,endDate);
    }
    res.render('sort.ejs',{eventsData:eventsData});
});

router.get('/about_us', (req, res) => {
    res.render('aboutus.ejs');
});

router.get('/contact_us', (req, res) => {
    res.render('contactus.ejs');
});

router.get('/test', (req, res) => {
    res.render('events.ejs');
});



export default router;