(function(){
    function average3Grades(){
    }
    var sum = 0;
    for(var i = 0; i < 3;) {
        var toBeAddedToSum = 0;
        toBeAddedToSum = prompt("Enter a grade (3 accepted)");
        toBeAddedToSum = parseInt(toBeAddedToSum);
        if ((toBeAddedToSum == null) || (isNaN(toBeAddedToSum) == true) || (typeof(toBeAddedToSum) != "number") || (toBeAddedToSum < 0) || (toBeAddedToSum > 100)){
            alert("Please try again, entering a valid number.");
        } else {
            sum = (sum + toBeAddedToSum);
            i++;
        }
    }
    var avg = sum/3;
    if (avg >= 80) {
        alert("You average is " + avg.toFixed(2) + ". You're awesome!");
    } else {
        alert("You need more practice... Your average was only " + avg.toFixed(2));
    }
average3Grades();

function genericGradesAverage() {
        var sum = 0;
        var i = 0;
        do {
            var toBeAddedToSum = 0;
            var confirmed = true;
            toBeAddedToSum = prompt("Enter a grade (You've entered " + i + " so far).");
            toBeAddedToSum = parseInt(toBeAddedToSum);
            if ((isNaN(toBeAddedToSum) == true) || (typeof(toBeAddedToSum) != "number") || (toBeAddedToSum < 0) || (toBeAddedToSum > 100)){
                alert("Please try again, entering a valid number.");
            } else {
                sum = (sum + toBeAddedToSum);
                confirmed = confirm("Would you like to continue entering values?");
                i++;
            }
        } while (confirmed == true);
        var avg = sum/i;
        if (avg >= 80) {
            alert("You average is " + avg.toFixed(2) + ". You're awesome!");
        } else {
            alert("You need more practice... Your average was only " + avg.toFixed(2));
        }
}
genericGradesAverage();
})();