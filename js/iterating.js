(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['Mike', 'Anna', 'David', 'Luis'];
    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);
    // TODO: Create log statements that will print each of the names array elements individually.
    var printNames = function (name) {
        console.log(name)
    };
    names.forEach(printNames);
    var grades = [100, 80, 90, 80, 70];
    function average(grades) {
        var sum = 0;
        var i;
        for (i = 0; i < grades.length; i++) {
            sum = (sum + grades[i]);
        }
        var avg = sum/i;
        return avg
    }
    console.log(average(grades));
})();

var arrayOfNumbers = [1, 2, 3, 4,5];
for(var i= 0; i < arrayOfNumbers.length; i++) {
    console.log("The element at index " + i + " is " + arrayOfNumbers[i]);
}

arrayOfNumbers.forEach(function(element, index, array) {
    console.log("The element at index " + index + " is " + element);
});

newArray = [];
[1, 2, 3, 4, 5].forEach(function(element, index, array) {
    newArray.push(element+1);
});

console.log(newArray);

arrayOfEvens = [];
[1, 2, 3, 4, 5].forEach(function(element, index, array) {

    function isEven(n) {
        return (n % 2 == 0);
    }

    if(isEven(element)) {
        arrayOfEvens.push(element);
    }
});

console.log(arrayOfEvens);

var sum = 0;
[1, 2, 3, 4, 5].forEach(function(element, array) {
    sum += element;
});
console.log(sum);

// Function 1
var beatlesPlusOne = ['john', 'paul', 'ringo', 'george', 'yoko'];
function capitalizeFirstLetter(array) {
    var nicerArray = [];
    array.forEach(function(element) {
        nicerArray.push(element.replace(element.charAt(0), element.charAt(0).toUpperCase()));
    });
    return nicerArray;
}
console.log(capitalizeFirstLetter(beatlesPlusOne));

// Function 2
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function progressiveMultiplication(array) {
    var product = 1;
    array.forEach(function(element){
        product *= element;
    });
    return product;
}
console.log(progressiveMultiplication(numbers));

// Function 3
function lister(array){
    var open = "<ul>";
    var close = "</ul>";
    var whole = open;
    array.forEach(function(element) {
        whole += ("<li>" + element + "</li>");
    });
    whole += close;
    return whole;
}

console.log(lister(capitalizeFirstLetter(beatlesPlusOne)));



// TODO: Take an array of strings containing all the states ; return only states that start with T.
var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
function tStates(array) {
    var tStatesArray = [];
    array.forEach(function(element) {
        if (element.charAt(0) == "T") {
            tStatesArray.push(element);
        }
    });
    return tStatesArray;
}
console.log(tStates(states));


// TODO: Take the same array; return only states with 2 or more of the letter 's'.
function ssStates(array) {
    var ssStatesArray = [];
    array.forEach(function(element) {
        var s = 0;
        var charArray = element.split('');
        charArray.forEach(function(letter) {
            if (letter == 's') {
                s++;
            }
        });
        if (s >= 2) {
            ssStatesArray.push(element);
        }
    });
    return ssStatesArray;
}
console.log(ssStates(states));


// TODO: Take an array and square each number in the array; should return arrayOfSquares.
function squareEach(array) {
    var sum = 0;
    array.forEach(function(element) {
        var square = element * element;
        sum += square;
    });
    return sum;
}
console.log(squareEach(numbers));


// TODO: Take an array of lowercase names, uppercase the first letter of each name; return only the names that start with Y.
var namesArray = ["yena", 'sasha', 'dan', 'jeff', 'drew', 'alex', 'vinny', 'yasha'];
function Ys(array) {
    var capitalizedNames = capitalizeFirstLetter(array);
    var returnNames = [];
    capitalizedNames.forEach(function(element) {
        if(element.charAt(0) == 'Y') {
            returnNames.push(element);
        }
    });
    return returnNames;
}
console.log(Ys(namesArray));


// TODO: Take an array of numbers 1-10; return the sum of only the numbers divisible by 3.
function divisibleByThreeSum(array) {
    var sum = 0;
    var divisibleByThree = [];
    array.forEach(function(element) {
        if ((element % 3) == 0) {
            divisibleByThree.push(element);
        }
    });
    divisibleByThree.forEach(function(element) {
        sum += element;
    });
    return sum;
}
console.log(divisibleByThreeSum(numbers));