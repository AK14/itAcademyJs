/*const answer = prompt('Вам есть 18 лет ?');
if(answer ===  'Да'){
    alert('Nice')
}else (
    alert('Bad')
)*/

/*let num1 = Number( prompt('Введите первое число') );
let num2 = Number ( prompt('Введите второе число') );
let symbol = prompt('Введите математичекий аператор');
let result;
switch (symbol) {
    case '-':
        result = num1 - num2;
        break;
    case '+':
        result = num1 + num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    case '*':
        result = num1 * num2;

        break;
    default:
        result = 'Такой операции не существкует';
}
alert(`${result}`);
*/


let form = document.getElementById('myform');
let name = document.getElementById('name');

// form.addEventListener('submit', function (e){
//     e.preventDefault();
//     let formData = new FormData(form);
//     let name = formData.get('name');
//
//     if(name.length){
//         alert(hello(name));
//     }
//
//     let num1 = Number(formData.get('num1'));
//     let num2 = Number(formData.get('num2'));
//     let symbol = formData.get('symbol');
//
//     let result;
//
//     switch (symbol) {
//         case '-':
//             result = num1 - num2;
//             break;
//         case '+':
//             result = num1 + num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         case '*':
//             result = num1 * num2;
//
//             break;
//         default:
//             result = 'Такой операции не существкует';
//     }
//     alert(`${result}`);
//
// }, true);

let result = 0;
for(let i = 0; i <= 100; i++ ){
    // result = result + i;

    if( i % 2 === 0 ){
        // console.log(i);
    }
}

/* Выводим вопрос пока не будет указано 100 и выше
let userAnswer;
do {
    userAnswer =  Number(prompt('Введите число'));
}while ( userAnswer < 100 )
*/


/* УРОК 3  */
// функции
function hello (name='john'){
    return `Привет, ${name}`
}
function hello1 (name){
    let d = new FormData();
    console.log(d.get('name'));

    console.log(`Привет, ${d.get('name')}`);
}

// name.addEventListener('submit', hello1.bind(name), true);

// alert(helfFlo());

// переводит часы в минуты
let getMinutes = (hours) => typeof (hours) !== 'number' ? 'Введите пожалуйста число' : hours * 60
let getType  = (type) => typeof type;
let compareInt = (int1, int2) => {
    if(int1 < int2)
        return int1
    if (int2 < int1 )
        return int2
}


// console.log(getMinutes('sdf'));
// console.log(getMinutes(5));

// console.log(getType(1));
// console.log(getType('asd'));
// console.log(getType(null));
// console.log(getType([1, 2]));
// console.log(getType(0));
// console.log(getType());
// console.log(getType(''));

// console.log(compareInt( 10, 20));
// console.log(compareInt( 30, 15));


// Урок 4
// область видимости
let sum = ( int ) => {
    let sum = 0;
    for(let i = 0; i <= int; i++){
        sum = sum + i;
    }
    return sum;
}
// console.log(sum(50));

// Массивы
/*
[] or new Array(),
длинна масива array.length,

*/

let dtaArray = [1,'string', null, false,'' ];
// циклом for
for (let i = 0; i < dtaArray.length; i++){
    // console.log( dtaArray[i], typeof (dtaArray[i]));
}
// через of
for(let t of dtaArray){
    // console.log(t,typeof (t));
}
// через in
for(let c in dtaArray){
    // console.log(dtaArray[c]);
}
/*
Добавить в конец массива
    array1 = [1,2];
    array1[array1.length] = 'test';
    array1.push('test2');

Удаление массива array1.pop
 */


/* УРОК 4 Объекты */
let iam = {
    Name : 'Alexander',
    age : 15
}

let myData = (name, age) => {
    let result =
    {
        Name:name,
        Age:age
    }
    return result;
}


let salaries = {
    Ann: 500,
    Anton:1400,
    Tatyana: 700
}
let salariesSum = 0;

/*for(let key in salaries){
    salariesSum = salariesSum + salaries[key]
}*/

for(let key of Object.values(salaries) ){
    salariesSum += key;
}


let obj = (data) => {
    let result;
    let sum = 0;

    /*for(let item in data){
        let i = data[item];
        if(i && Number(i) > sum)
        {
            sum = i;
            result = item
        }
    }
    return result;*/

    let res2 = {};
    for(let item1 in data){
        if(Object.values(res2) < data[item1]){
            res2 = {[item1]: data[item1]};
        }
    }

    return res2;
}

// console.log(obj(salaries));

// console.log(myData('Alex','45'))


let fruits = [
    {fruits:5},
    {fruits:15},
    {fruits:4},
    {fruits:23},
    {fruits:65},
    {fruits:0},
    {fruits:32},
    {fruits:12},
    {fruits:15},
    {fruits:65},
    {fruits:7},
    {fruits:5},
]

let sumFruits1 = ( array ) => {
    let sum = 0;
    for (let item of array){
        sum = sum + item.fruits;
    }
    return sum
}

let sumFruits2 = ( array ) => {
    let sum = 0;
    for (let item in array){
        let obj = array[item];
        sum = sum + obj.fruits;
    }
    return sum
}

// console.log(sumFruits1(fruits));
// console.log(sumFruits2(fruits));

let anyStrings = [
    'Hello','my','Dear', 'Friend'
];

result = '';
for (let str in anyStrings)
{
    let val = anyStrings[str]+' '
    result += val;
}

// console.log(result);
// обединение массива строк
// console.log( anyStrings.join('\u00A0') );

/*
* Метод splice
* */
// let test = anyStrings.splice(1,2);
// console.log(anyStrings);

let test = anyStrings.splice(1,2,"first",'second');
// console.log(anyStrings);

/*
* Метод slice
* */
// const array  = ['t','e','s','t']
// const newArray = array.slice();
// newArray.push("s");

// console.log(array,newArray);


/*
* Метод concat
* обединение массивов, объдинение строк
* */
// const array  = [1,2];
// const newArray = [3,4];

// let concatArray = array.concat(newArray)
// console.log(concatArray);

/*
* Метод indexOf
* обединение массивов, объдинение строк
* */
let array = [1, 0 , false]
console.log();
// if(array.indexOf('null') !== '-1'){
//
// }


// console.log( array )
// ----
array = [ [1,2,4] , [3,5,7] ]
let concatArray = (array) => {
    let result=[];
    for (let ar in array){
        result = result.concat( array[ar] );
    }
}
concatArray(array);



array = [
    {name:'Igor', age:26},
    {name:'Alexey', age:41},
    {name:'Marry', age:37},
    {name:'Boris', age:37}
]

let getObj = (index,val) => {
    return array.filter((item) => {
        if (item[index] === val) {
            return true;
        }
    })
}

// console.log( getObj('age',37));
// console.log( getObj('age',42));
// console.log( getObj('name','Alexey'));


array = [
    {name:'John',surname:'Silver', id:10},
    {name:'Pete',surname:'Phili', id:5},
    {name:'Mary',surname:'Jayn', id:12},
    {name:'Konstantin',surname:'Dzu', id:4},
    {name:'Ivan',surname:'Pechkin', id:22}
]

let getScore = (val) => {
    return array.filter( (item) => {
        if (item.id > val) {
            return true
        }
    })
}
// console.log( getScore(10) );


let getScore2 = array.filter(function (i){
    if (i.id >= 4 && i.id <= 12) {
        return true
    }
})
// console.log(getScore2);

let answer = array.map((item) =>{
    if( item.id > 12 ){
        return item
        // return [name = item.name, score = item.score];
    }

});
// console.log(answer);

let users = array.map((item) => {
   let result = {
        fullNmame : `${item.name} ${item.surname}`,
        id : item.id
    }
    return result
});

// console.log(users);

let sortArray = [12,4,6,22,102, 3];
let objArray = [
    {score:22}, {score:12},{score:30},{score:5}
];
let sorted = sortArray.sort(( a,b)=>{
    return a - b;
    /*
    if( a < b ) {
        return -1
    }

    if( a > b ) {
        return  1
    }

    return  0
    */
})
let sorted2 = objArray.sort((obj1, obj2) => {
    return obj1.score - obj2.score
})

// console.log(sorted);
// console.log(sorted2);

let testArray = [
    ['a',2],
    ['b',2],
    ['c',3]
]

let getArrObjects = (arr) => {
    let key = arr[0]
    let val = arr[1]

    return  {[key]:val}
}

result = testArray.map(getArrObjects);
// console.log(result);

/** Метод reduce */

testArray = [{a:1},{a:2},{a:3}]
let foo = testArray.reduce((acc, item) => {
    return acc + item.a;
}, 0)
// console.log(foo);

let user = {
    name: 'Alexander',
    age: 36,
    sayHi: function (){
        // console.log('Hi my name is ' +  this.name );
        // console.log(this.sayHi());
    }
}

let admin = user;
user = null;

admin.sayHi();
user = { name: 'User'};
admin = { name: 'Admin'}

function sayHi(){
    // console.log(this.name);
}
// console.log(sayHi());
user.f = sayHi;
admin.f = sayHi;
user.f();
admin.f();

function helloJack ()
{
    return `Hello ${this.name}`
}
let bob = { name: 'Bob' }
bob.hello = helloJack;
// console.log(bob.hello());

/* Функции конструкторы ( пишуться с большой буквы )*/
function User(name){
    this.name = name;
    this.isAdmin = false;
}

user = new User('Juli')
// console.log(user);
testArray = ["Oleg",'Vlad', 'Genri', 'Cat'];

result = testArray.map((item) => {
    return new User(item);
})
// console.log(result);


// less 8
function Animal(type){
    this.type = type;

    this.sayHi = () => {
        return `I am ${this.type}`;
    }
}

let cat = new Animal('cat');
let dog = new Animal('dog');
// console.log(cat.sayHi());
// console.log(dog.sayHi());

// калькулятор
// read
// sum
// mul

class Calculator {
    int1 = 0;
    int2 = 0;

    read () {
        let int1 = prompt( 'Число 1')
        let int2 = prompt( 'Число 2')

        this.int1 = Number(int1);
        this.int2 = Number(int2);
    }

    sum (){
        return this.int1 + this.int2
    }

    mul (){
        return this.int1 * this.int2
    }

    min  () {
        return this.int1 - this.int2
    }

    dec (){
        return this.int1 / this.int2
    }
}

// test = new Calculator();
// test.read(10,2);
// console.log(test.sum());
// console.log(test.mul());
// console.log(test.min());
// console.log(test.dec());


class NewUser {
    constructor(name) {
        this.name = name;
    }

    sayHi () {
        console.log(this.name);
    }

}

/*
class Review {
    constructor(date, title) {
        this.date = date;
        this.title = title;
    }

    static createReview(title){
        return {
            date: new Date(),
            title:title
        }
    }
}
const  review = Review.createReview('New Review');

// задачка
class Atricles {
    static date = new Date();

    static compare( date1, date2 ){
        console.log(date1, date2);
    }
}

const art = Atricles.date;
    const art2 = new Date(02);

setTimeout(()=>{
    console.log(Atricles.compare(art, art2) );
}, 400)*/


// const formReview = document.querySelector('#reviewForm');



/*
12 УРОК
* ВСТРОЕННЫЕ ОБЪЕКТЫ И КЛАССЫ
* */

Math.max();
Math.min(0,2,5,7,9);
Math.round(); // округление до ближайшего целого числа;
Math.ceil(); // округление к большему
Math.floor(); // округление к меньшему
Math.sqrt(); // квадратный корень
Math.pow(7,2);
Math.random();

Number.MAX_VALUE; // юольше этого числа нельзя хранить в переменной
Number.MIN_VALUE;
Number.isNaN(4);
Number(1,4566).toFixed(3);

const string = 'Hello, JS world !'
String.length // длина строки
string.split(", ")
string.toLowerCase();
string.toUpperCase();
string.replace('JS', 'Vue'); // заменяет вхождение на аргумент
string.trim(); // обрезает проблемы в начале и конце

array =  [1,2,3]
array.every((item) =>{
    return item === 1
}) // return false
array.some((item) => {
    return item === 1
}) // return true
array.join();
array.reverse();
array.join();

// Date
new Date('').getMilliseconds();
new Date('').getTime();
new Date('').getDate();
new Date('').getDay();
new Date('').toLocaleDateString();


const  object = { myname:"Alexander", age: 37 }

//  дестурукзация
// const { myname , age } = object; // переменная называется как в об'екте
// const { myname:name1 , age:age1 } = object; // назначаем имя переменной
// const { myname:name2 , age = 22 } = object; // значение по умолчанію
// console.log(name2, age);


const newObject = {
    ...object, // копирует объект object
    time: new Date(), //  дополняем новое свойство;
    name: 'Tomara', // изменяет свойство
}
// так же с массивом
const newArray = [...array, 5, 'some string'];

const interval = setInterval(()=>{
    let timer = document.getElementById('timer');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('min');

   // timer

   let value = Number(timer.innerText);
   value ++;
   timer.innerText = value;

//   clock
    hours.innerText = new Date().getHours();
    minutes.innerText = new Date().getMinutes();

}, 1000 );

clearInterval(interval); // остановить интервал

// сделать счетчик
const counter = document.getElementById('counter');
if(counter){
    counter.addEventListener('click',(e) => {
        let i = document.getElementById('counterResult');
        let int = i.innerText;
        let operation = e.target.value;

        if(operation === '+') int++;
        if(operation === '-') int--;

        i.innerText = int;
    })
}


// расширить класс с помощью prototype
Array.prototype.isEmpty = function () {
    return this.length === 0;
}

String.prototype.getVowels = function () {
    let arr = this.toLowerCase().split('');
    let words = ['а','у','о','и','э','ы','я','ю','е','ё']
    let counter = 0;
    arr.map((i) =>{
        if(words.includes(i)){
            counter ++
        }
    })
    return counter

}
// console.log('Париж'.getVowels());


let promise = new Promise((resolve, reject)=>{
   setTimeout(() => {
       resolve({name:'Hello'})
   }, 3000);

    setTimeout(() => {
        reject({message:'error'})
    }, 4000);
});

promise.then( (data) =>{
    console.log(data.name);
})

promise.catch( (data) =>{
    console.log(data.message);
})

console.log("I'm being called before greet");

/*const promiseFetch = fetch('https://randomuser.me/api/');
promiseFetch
    .then((response) => response.json())
    .then((user) => {
        let data = user.results[0]

        let img = document.getElementById('image');
        let name = document.getElementById('name');
        let email = document.getElementById('email');

        // img.setAttribute('src', data.picture.large);
        img.src = data.picture.large
        name.innerText = `${data.name.title} ${data.name.first} ${data.name.last}`;
        email.innerText = data.email;
    })*/


// АСИНХРОННЫЕ ФУНКЦИИ

async  function loadUser(){
    const url = await fetch('https://randomuser.me/api/');
    let response = await url.json();
    let data = response.results[0]

    let img = document.getElementById('image');
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    // img.setAttribute('src', data.picture.large);
    img.src = data.picture.large
    name.innerText = `${data.name.title} ${data.name.first} ${data.name.last}`;
    email.innerText = data.email;
}
/*

const btnUsrChange = document.getElementById('change_user');
btnUsrChange.addEventListener('click',()=>{
    let result = loadUser();
});
*/


// статические функции
// Promise.all([promiseFetch1,promiseFetch2,promiseFetch3]) - ждет выполнения всех промисов
// Promise.race([promiseFetch1,promiseFetch2,promiseFetch3])  - возвращает первый вернувшийся
// Promise.allSettled([promiseFetch1,promiseFetch2,promiseFetch3]) - ернет результат по каждому из промисов
/*Promise.allSettled([fetch('https://randomuser.me/api/'),fetch('https://randomuser.me/api/'),fetch('https://randomuser.me/api/')]).then((data)=>{
    console.log(data);
})*/


// console.log('asdfasdf');
// import sum1 from "./module";
//
// console.log(sum1(2+2));

/* СОБЫТИЯ МЫШИ */
/*
mouse up
mouse down
mouse over

const clicker = document.getElementById('clicker');
clicker.addEventListener('click', function (e){
    console.log('alt', e.altKey);
    console.log('shift', e.shiftKey);
});

*/

/*
* event COPY - запретить копирование
* */
/*
const noCopy = document.querySelector('.text-no-copy');
noCopy.addEventListener('copy', function (e){
    e.preventDefault();
    e.clipboardData.clearData();
})

const uls = document.querySelector('.q')
*/

// КАРРИРОВАНИЕ
/*
function carr(a){
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

function carr2(func){
    return (b) => {
        b = b+1;
        return (c) => {
            c = c+1;
            return func( b , c )
        }
    }
}

function  sum1 (a,b){
    return a + b;
}
test = carr2(sum1);
console.log(test(1)(1));
*/

// carr(a)(b)(c);



// DRAG N DROP
/*
let dragImg = document.querySelector('.dragImg');

if(dragImg){
    dragImg.addEventListener('mousedown', function (e){

    })
}
*/


// сделать клавиатуру
//keyUp , KeyDown


/*let kb = document.getElementById('keyboard');
if(kb){

    document.addEventListener('keydown',  (e) => {
        e.preventDefault();
        console.log(e, e.target);
    });
}*/
