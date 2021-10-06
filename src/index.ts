import express from 'express'
import {json} from 'body-parser'

import router from './routes/routeTemp';
import connection from './database/connection';

const app = express();
const port = 3001; 

app.use(json());
app.use('/temperature', router)

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

//db name = jol
//collection name = temperatures
