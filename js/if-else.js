/**
 * Created by shffle on 10/6/16.
 */
var grade1=70;
var grade2=80;
var grade3=95;

if ((grade1+grade2+grade3)/3 >= 80){
    console.log("You're Awesome")
} else {
    console.log("You need more practice... :(")
}

var cameron=180;
var ryan=250;
var george=320;
var discount=0.80; /* 20% off */

if (cameron > 200){
    console.log("Cameron|| Before Discount : " + cameron + " || After Discount : " + (cameron * discount));
} else {
    console.log("Cameron : " + cameron);
}
if (ryan > 200){
    console.log("Ryan|| Before Discount : " + ryan + " || After Discount : " + (ryan * discount));
} else {
    console.log("Ryan : " + ryan);
}
if (george > 200) {
    console.log("George|| Before Discount : " + george + " || After Discount : " + (george * discount));
} else {
    console.log("George : " + george);
}

var flipACoin = Math.floor(Math.random()*2);

if (flipACoin = 1){
    console.log("Buy a house");
} else if (flipACoin = 0){
    console.log("Buy a car");
} else {
    console.log("How the hell did you manage this?");
}