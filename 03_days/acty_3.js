// const number = 6
// switch (number) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;

//         break;

//     default:
//         console.log("invalid input");
        
//         break;
// }

//************task 2 ******* */

const score = 50
switch (true) {
    case (score < 100 && score >=85): console.log("Your grade is A");
    break;
    case (score < 85 && score >=70): console.log("Your grade is B");
    break;
    case (score < 70 && score >=55): console.log("Your grade is C");
    break;
    case (score < 55 && score >=40): console.log("Your grade is D");
    break;
    case (score < 40 && score >=25): console.log("Your grade is E");
    break;

    default:
        break;
}