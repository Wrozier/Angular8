//Intefaces allows us to create contracts of other classes/objects which have to implement
//It allows to use them to define custom types without creating classes
//In TS interfaces are not compiled to JS it's just for checking /validation done eby TS compiler


//Example interface
interface User {
    username: string;
    password:string;
    confirmPassword?: string; //OPtional property => Does not have to be iimplemented
}

let user:User;

//This value does satisfy the interface
user = {username: 'Will', password: 'idkmypw'};

//This value does not satisfy the interface => compilation error is incountered

//user= {anything:'anything', anynumber: 5}; cant use

//Interfaces can also contain functions ( without function body - as it is just a blueprint/ requirement)

interface CanDrive {
    accelerate(speed: number):void ;
}

let Car:CanDrive = {
    accelerate: function (speed:number){
        
    }

}