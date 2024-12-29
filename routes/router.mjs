import express from 'express'
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
});
router.get('/calendar', (req, res) => {
    res.render('calendar.ejs');
});
router.get('/sort', (req, res) => {
    res.render('sort.ejs');
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