import  Express  from "express";
import { router } from "./routers/fibonacci.router.js";
const app = Express();

    




app.use( '/fibonacci/', router ) ;
app.all( '*', (req, res )=>{
    res.status(500).send( 'Bad request' )
})

app.listen( 3000,()=>{
    console.log('App running');
})