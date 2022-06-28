
// homework 1
let getYear = document.getElementById('getYear');
let el = document.getElementById('getYearResult');

if(getYear)
{
    getYear.addEventListener('submit', function (e){
        e.preventDefault();
        let formData = new FormData(getYear);
        let year = formData.get('year');

        let result;
        if( year % 4 === 0 && year % 100 !== 0 || !(year % 400) )
        {
            result = 366;
        }else {
            result = 365;
        }

        el.innerText = `В году ${result} дней`;
        el.style.display = 'block';
    }, true);
}


// homework 2

let checkBirthday = (e) => {
    e.preventDefault();
    let formData = new FormData(birthDay);
    let date = Number( formData.get('date') )
    let result;

    if(!date || date === 0)
    {
        result = 'Произошла ошибка'
        el.innerText = result;
        el.style.display = 'block';
        throw stop();
    }

    if (date < 18)
    {
        result = 'К сожалению вы нам не подходдите'
    }else {
        result = 'Добро пожаловать к нам в комманду'
    }

    el.innerText = result;
    el.style.display = 'block';
}
let birthDay = document.getElementById('birthday');
if(birthDay){
    birthDay.addEventListener('submit', checkBirthday, false)
}

// homework 3
// v1
let arrayClear = (data) =>{
    return data.filter( n => n );
}
// v2
let arrayClear2 = (value) => {
    if(typeof(value) !== "undefined" && value) {
        return value;
    }
}

let testArray = [1,2, null, '', false, 4]
// v1 log
result = arrayClear(testArray);
// console.log(result);
// v2 log
result = testArray.filter(arrayClear2);
// console.log( result );

// homework 4
let delObjDataByKey = (data, keys) => {
    let result = {};

    Object.entries(data).map(function ([key, value]){
         if( !keys.includes(key) ){
             Object.assign(result,{ [key]:value} )
         }
    })

    return result;
}

testObj = {a: 1, b: 2, c: 3 };
result = delObjDataByKey(testObj,['c']);
// console.log(result);

// homework 5
let nameToString = (data, name) => {
    let result = '';
    for(item of data){
        if(!item){
            item = name
        }
        result += item + ' '
    }
    return result;
}
testArray = ['hello', 'i', 'am', null];
console.log( nameToString(testArray,'Alexander') );