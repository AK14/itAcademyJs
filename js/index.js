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

form.addEventListener('submit', function (e){
    e.preventDefault();
    let formData = new FormData(form);
    let name = formData.get('name');

    if(name.length){
        alert(hello(name));
    }

    let num1 = Number(formData.get('num1'));
    let num2 = Number(formData.get('num2'));
    let symbol = formData.get('symbol');

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

}, true);



let result = 0;
for(let i = 0; i <= 100; i++ ){
    // result = result + i;

    if( i % 2 === 0 ){
        console.log(i);
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

name.addEventListener('submit', hello1.bind(name), true);

// alert(hello());

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

console.log(compareInt( 10, 20));
console.log(compareInt( 30, 15));