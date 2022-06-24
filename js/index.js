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
console.log(salariesSum);

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
        console.log('vall', Object.values(res2));
        if(Object.values(res2) < data[item1]){
            res2 = {[item1]: data[item1]};
        }
    }

    return res2;
}

console.log(obj(salaries));

// console.log(myData('Alex','45'))