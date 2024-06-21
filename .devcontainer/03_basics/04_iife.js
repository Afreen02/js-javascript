// ** IMMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE) ** //
// - To remove global scope pollution we use IIFE.


(function iife(){                  //1st method - also called named iife
    console.log("Connection");
})();

( () =>  {                        // 2nd method - unnamed iife
    console.log('Conneted to system');
})();

((name) => {                      // 3rd method - passed parameters in iife 
    console.log(`Connecting to  ${name}`);
})('Afreen');