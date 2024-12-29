import express from 'express'

const app =express()

import router from './routes/router.mjs';


app.set( 'view engine' , 'ejs' )


app.use('/',express.static('static'));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.use('/',router)

