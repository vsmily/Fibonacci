export const validate = ( req, res, next )=>{
    try{
        const seq = parseFloat(req.params.id);

        if(!seq){
            throw new Error( 'Invalid type' );
        }
        if ( seq < 0 ){
            throw new Error('Invalid sequence')    ;
        }
    
        if (( seq % 1 ) > 0 ){
            throw new Error( 'Invalid type' );
        }
        req.seq = seq;
        next()   
    }
    catch(e){
        res.status(500).json( {message: e.message } )
    }
 

}