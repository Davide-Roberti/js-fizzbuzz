// stampo a schermo 100 numeri con un ciclo for
// pongo una condizione se sono multipli sia di 3 che di 5 scrivi FizzBuzz
// pongo una condizione: se sono multipli di 3 scrivi Fizz
// pongo una condizione: se sono multipli di 5 scrivi Buzz


for (var i = 1; i < 101; i++) {
    restoTre = i % 3;
    restoCinque = i % 5;
    if (restoTre == 0 && restoCinque == 0) {
        console.log('FizzBuzz');
    } else if (restoTre == 0) {
        console.log('Fizz');
    } else if (restoCinque == 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
