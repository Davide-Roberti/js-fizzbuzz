// stampo a schermo 100 numeri
// pongo una condizione: se sono multipli di 3 scrivi Fizz
// pongo una condizione: se sono multipli di 5 scrivi Buzz
// pongo una condizione se sono multipli sia di 3 che di 5 scrivi FizzBuzz


for (var i = 1; i < 101; i++) {
    restoTre = i % 3;
    if (restoTre == 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}
