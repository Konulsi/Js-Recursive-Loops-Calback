"use strict"


//2) Ededin faktorialinin hesablanmasini recursive function ile yazin.


// function getFactorial(num) {

//     if (num == 1) {
//         return num;
//     } 
//     else{
//         return num * getFactorial(num - 1)
//     } 

// }

// console.log(getFactorial(5));



//3) Icerisinde name, surname, age, email olan bir nece student objectleriniz var. 
//Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.




let student1 = {
    name: "Konul",
    surname: "Ibrahimova",
    age: 27,
    email: "konulsi@code.edu.az",
}

let student2 = {
    name: "Chinara",
    surname: "Ibadova",
    age: 22,
    email: "chinaraei@code.edu.az",
}

let student3 = {
    name: "Shaig",
    surname: "Kazimov",
    age: 25,
    email: "shaigk@code.edu.az",
}

let student4 = {
    name: "Alekber",
    surname: "Hasanov",
    age: 20,
    email: "alakbarh@code.edu.az",
}

let students = [student1, student2, student3, student4];

//1) Yashi 18-25 araliginda olan telebelerin sayi.

// function getCountByAge(arr) {
//     let count = 0;
//     for (const student of students) {
//         if (student.age > 18 && student.age < 25) {
//             count++;
//         }
//     }

//     console.log(count);

// }
// getCountByAge(students)







//2) Emailinde "c" herfi olan studentlerin sayi.

// function getStudentsCountContainLetterInEmail(array) {

//     let count = 0;

//     for (const student of array) {
//         if (student.email.includes("c",0)) {
//             count++;
//         }
//     }
//     console.log(count);
// }

// getStudentsCountContainLetterInEmail(students);






// 4) Gelen yasha gore hansi ilden olduqugunu gosteren function yazin. 
// Meselen 30 gelirse function geriye 1993 qaytarmalidir.


// let age = 30;

// function showYear(age) {

//     let date = new Date().getFullYear();
//     let result = date - age;
//     console.log(result);
// }
// showYear(age);