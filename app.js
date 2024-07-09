// // // var, let, const
// // let name = "Muideen"
// // name = "Aptech"
// // //console.log(name)



// // let kelvin
// // console.log(kelvin)
// // kelvin= 'John Doe'
// // console.log(kelvin)
// // kelvin = 'Steve Smith'
// // console.log(kelvin)

// // Data type (number, boolean, string, array, object)
// // let a = 5
// // let b = 6.7
// // let isRainToday = true
// // let college = "Aptech Osogbo"
// // let fruits = ["Apple", "Pawpaw", "Mangoes", "Oranges", "Cucumber"]
// // const person = {
// //     name: "Kolawole Ridwan",
// //     jobrole: "Mathematician",
// //     company: "Aptech Osogbo",
// //     age: 56,
// //     salary: 670000.00
// // }
// // console.log(a)
// // console.log(b)
// // console.log(isRainToday)
// // console.log(college)
// // console.log(fruits[3])
// // console.log(person.name)
// // let res = person.jobrole
// // console.log(res)
// // document.body.innerHTML = `
// // <h1>Details</h1>
// // <b>Name: </b> ${person.name} <br>
// // <b>Jobrole: </b> ${person.jobrole} <br>
// // <b>Company: </b> ${person.company} <br>
// // <b>Age: </b> ${person.age} <br>
// // <b>Salary: </b> ${person.salary} <br>


// // Casting 


// let val = 5;
// let a = "a"
// //console.log(val)
// //console.log(val+5)
// //console.log(typeof val)
// // Number to string
// val = String(5);
// console.log(val)
// console.log(val+5)
// console.log(val*5)
// console.log(val*a);
// console.log(val+a);
// console.log(typeof val)

// let names = ["Inioluwa", "Muideen", "Aptech", "Computer", "Samad", "Osogbo", "Osun", "State"]
// let numbers = [1,2,3,4,5,6,7,8,9,10]
// names.unshift("General")
// names.push("Nigeria")
// names.pop()
// names.shift()
// numbers.splice(1,4)
// //numbers.reverse()
// numbers.sort((a,b)=>a-b)
// numbers.sort((a,b)=>b-a)
// names.sort()
// console.log(names)


// let fruits = ["Apple", "Mango","Water Melon", "Pawpaw"]
// let numbers = [1,2,3,4,5,6,7,8,9]
// //fruits[0] = "Pineapple"
// Methods in Array
//push()  -  Add to the back of an array
//fruits.push("Muideen")
//unshift() - Add to the front of the array
//fruits.unshift("Aptech")
//pop() - remove from the back
//fruits.pop()
//shift() - remove from the front
//fruits.shift()

//splice () - 
//fruits.splice(1,2)
// fruits.splice(2,0,"Cucumber")
// numbers.splice(2,7)
// fruits.sort()
// fruits.reverse()
// console.log(fruits)
// console.log(numbers)


// String Methods
// const firstName = 'William'
// const lastName = 'Johnson'
// const str = 'Hello there my name is Brad'
// const tags = 'web design,web development,programming'

// let val;
// //Concatenation
// val = firstName + lastName;
// val = firstName +" "+ lastName;


// Append
// val = 'Brad ';
// val += 'Traversy'   // Meaning val = Brad + Traversy

// Length

// val = firstName.length;


// concat()
//val = firstName.concat(' ', lastName);

// upper case
//val = firstName.toUpperCase()
// Lower case

//val = firstName.toLowerCase();

// indexOf()
//val = firstName.indexOf('a');
//val = firstName.lastIndexOf('l');

// charAt()
//val = firstName.charAt('2');

// substring()
//val = firstName.substring(5,7);



// split()
// val = str.split(' ');
// val = tags.split(',');
// console.log(val)


// CONDITIONAL STATEMENT
//IF STATEMENT
// var x = 3;
// if (x > 5) {
//     console.log("x is greater than 5");
// }


// IF ELSE STATEMENT

// var age = 2;
// if (age >= 18) {
//     console.log("You are an adult.");
// } 
// else {
//     console.log("You are a minor.");
// }


// IF...ELSE IF...ELSE STATEMENT:

// var score = 650;
// if (score >= 90) {
//     console.log("A");
// } 
// else if (score >= 80) {
//     console.log("B");
// } 
// else if (score >= 70) {
//     console.log("C");
// } 
// else {
//     console.log("D");
// }



// NESTED IF

// var x = 10;
// var y = 5;

// if (x > 5) {
//     if (y > 20) {
//         console.log("y is greater than 2");
//     } 
//     else {
//         console.log("y is not greater than 2");
//     }
// } 
// else {
//     console.log("x is not greater than 5");
// }



// SWITCH STATMENT

// var day = 7;
// var dayName;
// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     default:
//         dayName = "Unknown";
//     break;
// }

// console.log("Today is " + dayName);




//TENEARY OPERATOR

// var age = 20;
// var status = (age >= 18) ? "adult" : "minor";

// console.log("You are " + status);

// var age = 20;
// console.log((age >= 18) ? "Kamel" : "Dele Yessir");


// let number = prompt("Enter your score in Javascript: ")
//     number = parseFloat(number)
//     if(isNaN(number)){
//         alert("Please Enter a number")
//     }
//     else if(number > 100){
//         alert("Please Enter a number between 0  and 100")
//     }
//     else if (number >=70){
    //  alert("Grade is A")
    // }
    // else if (number >=60){
    //     alert("Grade is B")
    //    }
    //    else if (number >=50){
    //     alert("Grade is c")
    //    }
    //    else if (number >=45){
    //     alert("Grade is D")
    //    }
    //    else if (number >=40){
    //     alert("Grade is E")
    //    }
    //    else {
    //     alert("Carry Over Student")
    //    }
    // console.log(number)
    // For Loop

    //for(let  i = 1; i<=5; i++){
        //if(i%2=0){
      //      console.log(i)
       // }
   // }
    
    























   let i = 1;
   while (i <= t5) {
    console.log(i);
    1++;
   }