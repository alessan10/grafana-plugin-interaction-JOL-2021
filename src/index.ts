import express from 'express'
import {json} from 'body-parser'

import router from './routes/routeTemp';
import dbConnectionResult from './database/connection';

const app = express();
const port = 3001; 

app.use(json());
app.use('/temperature', router)

//DB connection
app.listen(dbConnectionResult)

//Server listening
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});