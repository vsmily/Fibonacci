import  Express  from "express";
import { router } from "./routers/fibonacci.router.js";
import { PORT } from "../config.js";
const app = Express();

    




app.use( '/fibonacci/', router ) ;
app.all( '*', (req, res )=>{
    res.status(500).send( 'Bad request' )
})

app.listen(  PORT ,()=>{
    console.log('App running');
})