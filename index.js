// #1 Фильтрация строки

const reg = /[ауеыоэюия]/g
const string = "Привет! Как дела?";
let vowelsString = string.match(reg).join(' ')
console.log(vowelsString);


// #2 Выборка объекта

const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}];

const getWorthyWorkers = function(array) {
  return  workers.filter(el => el.salary > 1000).map(el => el.name)
}

console.log(getWorthyWorkers(workers));


// #3 Анализ строки

const path = "/users/download/index.html"

const isHtml = function(str) {
  return str.includes(".html")
}
console.log(isHtml(path))


// #4 Фильтрация массива

const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = function(num) {
  return (num & 1) === 0
}


const filterArray = function(array, isEven) {
  let array2 = []
  
  array.map(el => {
    if (isEven(el)) {
      array2.push(el)
    }
    
  })
  return array2
}

console.log(filterArray(mixedArray, isEven))
