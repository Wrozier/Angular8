// TS are strong typing which allows us to define types for our variables and class memebers .
//The compileres would yell at us if we assign a value of a wrong type to such a variable 

//Declaring a variable with a type 
//We use 'let' keyword to create a var and use  'const' keyword to define 

let myString: string;

myString= "This is my string";

//myString = 4;

//Hence there is a compiliation error encountered when wromg datatype value is assigned 

//TS may only infer values when those values are assigned at the declaration

let yetAnotherString;

yetAnotherString = "This is another string";

//TS does not know the type in the above declaration, therefore we dont get an err.

yetAnotherString = 5;

//TS can also infer types

let anotherString = "This is a string"; //=> Type 'string' was inferred the assigend to the variable declaration
//anotherString = 5;

//Other basic types
let aString: string;
let aNumber : number;
let aBoolean: boolean;
let anArray: Array<string>; //This is a generic type => May hold 'strings' in this cas
let anything: any; //Any can be used if we dont know the actual type ==> 


//TS will still resolve in compilation error 