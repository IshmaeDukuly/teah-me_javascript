

'use strict';

let time = "10:pm"

switch(time) {
    case "10:am": 
    console.log("The office is open");
    break;
    case "11:am":
        console.log("One hour to lunch");
        break;
        case "10:pm":
            console.log("It's time to go home");
            break;
            default: {
                console.log("Not a working day");
            }
}
    
let days;

switch(days) {
    case "Monday":
        console.log("First day of the week");
        break;
    case "Tuesday": 
        console.log("second day of the week");
        break;
    case "Wednesday":
        console.log("Mid-Week");
        break;
    case "Thursday": 
        console.log("Fourth day in the week");
        break;
    case "Friday":
        console.log("black friday");
        break;
        case "Saturday":
        console.log("It's weekend");
        break;
    case "Sunday": 
        console.log("it is the day of the weekend");
        default:           
        console.log("not a day of the week");

}