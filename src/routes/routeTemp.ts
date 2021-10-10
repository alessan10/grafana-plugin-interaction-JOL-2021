import express from 'express'
import { getTemperature } from '../controller/controllerTemp';
import dbConnectionResult from '../database/connection';

const router = express.Router({mergeParams:true});

router.post('/', );

router.get('/get', getTemperature);

router.patch("/:id", /*patchController*/);

router.delete("/:id");

export default router;

// db.collection('temperatures').insert(req.body, function(err, result){
//     if (err) res.send('Error');
//     else res.send('Insert Success');
// });
