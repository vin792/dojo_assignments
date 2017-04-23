let myNum: number = 5;
let myString: string = "Hello Universe";
let anythingOne: any = "Hey";
anythingOne = 25;
let anythingTwo: any = "Hey";
anythingTwo = [1,2,3,4];
let anythingThree: any = "Hey";
anythingThree = { x: 1, y: 2 };
// There are two ways of declaring an array type
let ArrayNumbersOne: number[]=[1,2,3,4,5]; 
let arrayNumbersTwo: Array<number> = [1,2,3,4,5];
let myObj: object={ x: 5, y: 10 };
// function constructor
class MyNode {
    public val: number;
    private _priv: number;

    constructor(val){
        this.val = val;
    }
    
    doSomething(){
        this._priv = 10;
    };
}

let myNodeInstance:  MyNode = new MyNode(1);
console.log(myNodeInstance.val);
// This function will return nothing.
function myFunction():void {
    console.log("Hello World");
}



