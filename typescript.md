## Javascript(동적언어) ##
런타임에 타입 결정 /오류를 알려준다

## Java / TypeScript (정적언어) ## 
컴파일 타임에 타입 결정 / 오류 발견

# https://www.typescriptlang.org/play #
typescript 설치없이 사용가능

## Typescript 기본 타입 ##
let name:string = "철수";
let age:number = 30;
let isAdult:boolean = treu;

let a:number[] = [1,2,3]; // 숫자형 배열
let a2:Array<number> = [1,2,3]; // 숫자형배열

let week1:string[] = ['mon' , 'tue', 'wed']; // 문자형 배열
let week2:Array<string> = ['mon' , 'tue', 'wed']; // 문자형 배열

# 튜플 (Tuple) #
배열과 비슷한 외형 , 인덱스 별로 타입이 다를때 사용가능
let b:[string,number]; 배열의 첫번째 요소는 스트링이고 , 두번째에는 넘버가 가능

b = ['z',1]; 성립
// b = [ 1 , 'z']; 성립되지 안흠

toLowerCase() // 문자를 소문자로 만들어줌 <=> ToUpperCase();

b[0].toLowerCase(사용가능)
b[1].toLowerCase(사용불가능)

# void , never #
void : 로그를 찍고 반환하지 않는것에 void를 사용가능

function sayHello():void{
    console.log('hello');
} 

never : 항상 에러를 반환하거나 , 영원히 끝나지 않는 함수 타입에 사용가능

function showError():never{
    throw new Error();
}

function infLoop():never{
    while(true) {
        // do something..
    }
}

# enum #
enum : 특정값만 입력하게 강제하고싶을때, 그값들이 공통점이 있을때
       값을 지정해주지 않으면 0,1,2  /3 으로 정의 하면 3,4,5 
       숫자가 아닌 문자도 가능
ex)1
enum Os {
    Window = 3,
    Ios = 10,
    Android // 11이 출력됨 그전값에 + 1
}

console.log(Os[10]); // Ios 가 출력
console.log(Os.[Window]); // 3이 출력
ex2)
enus Os{
    Window = 'win',
    Ios = 'ios',
    Android = 'and'
}

let myOs:Os; // myOs 에는 window,ios,android 만 선언할수있게됨

myOs = Os.Window

# null, undefined #

let a:null = null;
let b:undefined = undefined;

## interface ##
ex)1
let user:object; // 객체는 오브젝트 타입으로 정의 할 수 있음

user = {
    name : 'xx',
    age : 30
}

console.log(user.name) // 에러가 출력되는데 오즈젝트에는 특정속성값이 없음
ex)2
type Score = 'A' | 'B' | 'C' | 'F' ;

interface User {
    name : string;
    age : number;
    height?: number; // ?옵션 으로 적어도되고 안적어도됨
    readonly birthYear : number; // 읽기전용 수정불가
    [grade:number] : Score;// number 키로 받고, string을 밸류로 여러개받을수 있음
                     학년을 숫자로받고 , 성적은 ABCD 등 string으로
                     type 을 지정해줬기에 위 에값만 입력가능
}

let user : User = {
    name : 'xx',
    age : 30,
    birthYear : 2002,
    1 : 'A',
    2 : 'B'
}

user.age = 10; // 변경가능
user.gender = "male"; // 사용불가 interface User {} 에 없기에 
user.birthYear = 1900; // 사용불가 읽기전용이기에

console.log(user,age) // 사용가능

ex3) 인터페이스로 함수도 정의
interface Add {
    (num1:number, num2:number) : number;
}

const add : Add = function(x, y) {
    return x + y;
}

add(10,20);

interface IsAdult {
    (age:number): boolean;
}

const a:isAdult = (age) => {
    return age > 19;
}

ex4) interface 로 class 정의 가능
// implements

interface Car {
    color:string;
    wheels:number;
    start():void;
}

interface Benz extends Car {
    door : number;
    stop() : void;
}

const benz : Benz = {
    door : 5,
    stop(){
        console.log('stop');
    }
    color : 'black';
    wheel:4,
    start(){};
}

class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c:string){
        this.color = c;
    }
    start() {
        console.log('go...');
    }
}

const b = new Bmw('green'); 
console.log(b);
b.start();

// extends 로 확장가능

## 함수 ##

ex1)
function add(num1: number, num2:number) :number {
    return num1 + num2;
}

function hello (name? : string) {
    return `Hello , ${name || "World"}`; // name 에 값이 없으면 world 가 출력
}

function hello2 (name = 'world') {
    return `Hello , ${name}`; 
} // JS 매개 변수에 default 값을 줄수있음


const result = hello()// ?가 없었다면 오류가나옴 , 정확히 명시해줘야함 !!
const result2 = hello("Sam");

ex2) 선택적 매개변수는 필수적 매개변수보다 앞에 있을 수 없다! // undefined 를 받는경우로 해야 입력값이 없어도 가능
fuction hello(name:string,age?:number):string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}.`;
    } else {
        return `Hello,  ${name} `;
    }
}

console.log(hello("Sam"));
console.log(hello("Sam",30));

ex3) 나머지 매개변수의 타입 작성법

function add(...num:number[]) { 
    return nums.reduce((result, num) => result + num, 0);
}

add(1,2,3,); // 6

ex4)this  ..
interface User {
    name : string;
}

const Sam : User = {name : 'Sam'};

function showName(this:User) { // 
    console.log(this.name)
}

const a = showName.bind(Sam);
a();