import express, { request } from 'express'
import fs from 'fs';
import { sortByEvents ,sortByDate } from './sortfunctions.js';
const router = express.Router();

router.get('/', (req, res) => {
    
    res.render('index.ejs');
});
router.get('/calendar', (req, res) => {
    res.render('calendar.ejs');
});
router.get('/sort', (req, res) => {
    
    const eventsJSON = fs.readFileSync('./routes/data.json', 'utf8');
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