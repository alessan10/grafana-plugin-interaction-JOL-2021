import express, { RequestHandler } from 'express' 
import { Temperature } from '../models/modelTemp';

const TEMP : Temperature[] = [];

export const getTemperature: RequestHandler = (req,res) =>{
    res.json({temperatures: TEMP})
}