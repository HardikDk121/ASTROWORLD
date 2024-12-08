import express from 'express'
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
});
router.get('/', (req, res) => {
    res.send('');
});
router.get('/', (req, res) => {
    res.send('');
});
router.get('/', (req, res) => {
    res.send('');
});

export default router;