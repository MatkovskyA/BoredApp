//CallBack функции----------------------

// function summ(a, b) {
//     return a + b;
// }

// function deff(a, b) {
//     return a - b;
// }

// function multip(a, b) {
//     return a * b;
// }

// function division(a, b) {
//     return a / b;
// }

// function doSomething(func) {
//     let x = 10;
//     let t = 15;
//     let result = func(x, t)
//     console.log(result)
// }

// doSomething(summ)
// doSomething(deff)
// doSomething(multip)
// doSomething(division)

//самовызывающаяся функция IIFE --------------------
// (function sayHi() {
//     console.log('Hello, dear user')
// })();
//анонимная самовызывающаяся функция IIFE --------------------
// let qwer = (function (a, b) {
//     return a + b;
// })(10, 15);

// console.log(qwer)

// стрелочная функция ----------------------------------
// function summ(a, b) {
//     return a + b
// }

// let summ2 = (a, b) => a + b;
// const res = summ2(10, 30)
// console.log(res)

//массивы - структуры данных [] ---------------------------
// хорошая практика - содержать в массивах только олнотипные данные.
// const autoBrand = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// console.log(autoBrand[2]); обращение к нужному элементу по индексу

// console.log(autoBrand.length); для просмотра длины массивов

// методы массивов []--------------------------------------


// arr.push(items) - добаляет элементы в конец массива
// arr.unshift(items) - добавляет элемент в начало массива
// arr.pop() - удалить элемент из конца массива
// arr.shift() - удалить элемент из начала массива
// arr.splice([start]], [deleteCount, newElement]) - удаляет элементы, где start - индекс элемента с какого нужно начать удаление. А deleteCount - кол-во элементов, которые я хочу удалить - к примеру 1

// const autoBrand = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// console.log(autoBrand); //(4) ['Audi', 'BMW', 'Mazda', 'Toyota']

// autoBrand.push('Lexus');

// console.log(autoBrand); //(5) ['Audi', 'BMW', 'Mazda', 'Toyota', 'Lexus']

// autoBrand.splice(1, 2);
// console.log(autoBrand) // (3) ['Audi', 'Toyota', 'Lexus']

// Циклы -------------------------------------

// for (let i = 0; i < 5; i++) {
    
//     console.log(i)
// }

// обход массива циклом for --------------------
// const autoBrand = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// for (i = 0; i < autoBrand.length; i++) {
//     console.log(autoBrand[i]) // перечислены все элементы массива 
// }

// обход массива циклом for ( of ) ------------------------ считается одним из самых удобных и современных способов перебора массива
// const autoBrand = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// for (const item of autoBrand) { // item - любое название можно указать
//     console.log(item) // перечислены все элементы массива 
// }

// обход массива методом  forEach() ------------------------
// const autoBrand = ['Audi', 'BMW', 'Mazda', 'Toyota'];

// autoBrand.forEach(function(brand, index){ // метод forEach() принимает в качестве аргумента функцию, которая будет выполнена для каждого элемента по очереди. В функции параметра мы можем объявить элемент, значение элемента и индекс - через запятую
//     console.log(`${brand} => ${index}`) // Audi => 0, BMW => 1, Mazda => 2, Toyota => 3
// })
// autoBrand.forEach(printBradn); //передаем функцию без скобок()

// function printBradn(brand, i) {
//     console.log(`${brand} => ${i}`)
// }

// autoBrand.forEach((brand, i) => console.log(`${brand} => ${i}`));

// Объекты {}-----------------------------------

// let userName = 'Tolea';
// let age = 30;
// let isMarried = true;

// const person = {
//     userName: 'Tolea',
//     age: 30,
//     isMarried: true,
//     profession: "Frontend developer"
// }

// console.log(person) // обращаемся ко всему объекту
// console.log(person.age) // обращаемся к определенным свойствам объекта - приоритетный вариант обращения

// let prof = 'profession'
// console.log(person[prof]) // еще один способ обращения к определенным свойствам объекта, через переменные

// //добавление савойств в объект
// person.surName = 'Matkovsky';

// console.log(person)


const textTitle = document.querySelector('#header-title')
const textActivity = document.querySelector('#action__text');
const button = document.querySelector('#button')

function fetchActivity() {
    textTitle.innerHTML = 'Now we have something to do🙃'
    

    fetch('https://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data => {
        if (data.status !== 'success') {
            textActivity.innerHTML = data.activity;
        } else {
            console.log('Error')
        }
    })
}

button.addEventListener('click', fetchActivity)

