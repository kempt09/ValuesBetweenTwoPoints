function arrayGen(a,b){

     'use strict';
    a = document.getElementById('valueOne').value;
    b = document.getElementById('valueTwo').value;

    var firstNum = parseInt(a),
        secondNum = parseInt(b),
        myArray = [],
        printArray = document.getElementById('print');

    myArray.push(firstNum);
    myArray.push(secondNum);

    function checker(firstNum,secondNum) {

        var i;

        if (myArray[0] < myArray[1]) {

            for (i = myArray[0]; i <= myArray[1]; i += 1) {
                myArray.push(i);
            }

        } else if (myArray[0] > myArray[1]) {

            for (i = myArray[0]; i >= myArray[1]; i -= 1 ) {
                myArray.push(i);
            }
        } else {
            console.log('error');
        }
    }

    checker(firstNum,secondNum);

    myArray.splice(1,2);
    printArray.innerHTML = myArray;

}
