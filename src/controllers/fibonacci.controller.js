import { fibonacciSeq } from "../services/fibonacci.service.js"

export const getFibonacci = ( req, res )=>{
    try{
        
        const result = fibonacciSeq( req.seq );
        //res.send( 'Integer')
        res.send( `Result is: ${result}`)    
    }
    catch(e){
        res.status(500).json( {message: e.message } )
    }
}
