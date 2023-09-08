/**
 * 
 * @param {*} seq  
 * @returns int
 * Receives the fibonacci sequence
 * And returns the index in the series
 */

export const fibonacciSeq = ( seq )=>{
    let fibo = [ 0, 1, 1 ] ;          
    for (  let i = 2;  i< seq; i++ ){
        const next  = fibo[ i ] + fibo[ i - 1 ] ;
        fibo.push( next );
    }
    console.log(fibo)
    const result = fibo[ seq ];
    return result;

}