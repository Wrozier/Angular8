//Classes allows use to create ' blueprints ' for objects
// In Angular 8 ,we use classes a lot. We use when creating Coponents, Services,
//directives , Pipes ....
//Lets see how to create a class

class Car {
engineName:string;
engineSize: number;
private speed: number;

constructor(speed: number){
    this.speed = speed || 0;
}

accelerate(): void{
    this.speed++;
}

throttle():void{
    this.speed--;
}
getSpeed():void{
    console.log(this.speed);
}

}
