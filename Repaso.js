// function sumar(params) {
//     let suma= a + b;
//     console.log(suma)
// }

// const  a = 1;
// const b = 2;

// sumar();


// /* funcion expresada*/ 

// const sumar1= function(a,b){
//     let suma= a + b;
//     console.log(suma)
// }
// sumar();




// /* arrow funcion */
// const sumar= function(a,b){
//     let suma= a + b;
//     console.log(suma)
// }
// sumar();



let number= parseInt(prompt("give me a number "))

function multiplicate(number) {
    for (let i = 1; i <= 9; i++){
        document.write(`${number} x  ${i} = ${number*i}</br>`)      
    }

}
multiplicate(number)


Math.floor(Math.random()*(3-1)+1)