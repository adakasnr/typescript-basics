// let,var and const are key words which are used to create a vraiable
// let and const are used to block key words
// let :

let resultForExams: number = 0;
/*  

let => it is one of the key word, used to create a variable.
By using let key word for the perticular variable, 
in further coding we can change the variable value. 

resultForExams-->this is a variable, it stores some data. 
For this variable the numbe r type is assigned(number is one of the data type)
value 0 is given as initial value to variable
(:) colon it allows to assign a data types to the variable 
(;) semi colon indicates the end of line

*/
const telugu: number = 20;
/*

const => it is one of the key word, used to create a variable.
By using constant key word for the perticular variable,
in further coding we can not assaign new value to that perticular variable.

telugu-->this is a variable,it stores some data.
For this variable the number type is assigned(number is one of the data type)
value 20 is given as value to variable
(:) colon it allows to assign a data types to the variable 
(;) semi colon indicates the end of line

*/
const english: number = 30;
/*

const => it is one of the key word, used to create a variable.
By using constant key word for the perticular variable,
in further coding we can not assaign new value to that perticular variable.

telugu-->this is a variable,it stores some data.
For this variable the number type is assigned(number is one of the data type)
value 30 is given as value to variable
(:) colon it allows to assign a data types to the variable 
(;) semi colon indicates the end of line

*/

const social: number = 40;
/*

const => it is one of the key word, used to create a variable.
By using constant key word for the perticular variable,
in further coding we can not assaign new value to that perticular variable.

telugu-->this is a variable,it stores some data.
For this variable the number type is assigned(number is one of the data type)
value 20 is given as value to variable
(:) colon it allows to assign a data types to the variable 
(;) semi colon indicates the end of line

*/

resultForExams = resultForExams + telugu;

/*
addition functionality is used , here i am adding 2 values(resultForExams and telugu) 
to the resultForExams

(resultForExams += telugu;)-> it is short form of line number 63

after doing addition the result value is assinged to the resultForExams variable, 
after this line of code(63) the value of resultForExams variable in further will be
considered as present value untill value is updated 

*/
console.log("telugu", resultForExams);
/*
console is a object and log is a function of console object

const consoleForTest = {
    log: () => {

    }
}
it is used to print the output

*/


resultForExams = resultForExams + english;
/*
addition functionality is used , here i am adding 2 values(resultForExams and english) 
to the resultForExams

(resultForExams += telugu;)-> it is short form of line number 63

*/

console.log("english", resultForExams);

resultForExams = resultForExams + social;
/*
addition functionality is used , here i am adding 2 values(resultForExams and social) 
to the resultForExams

(resultForExams += telugu;)-> it is short form of line number 63

*/

 console.log("total result", resultForExams);


telugu.