console.log('Функция 1')
const helloName = (name) => {
   console.log(`Hello ${name}`)
}
helloName('Андrey')

console.log('Функция 2')
const numbers = [1,5,7,12,16,24]
const checkNumbers = (array) => {
   for(let i = 0; i<array.length; i++){
      if(array[i] > 10){
         console.log(`Число больше 10: ${array[i]}`)
      }
   }
}
checkNumbers(numbers)

console.log('Функция 3')
const simpleCalc = (firstNumber,secondNumber,operation) => {
   if(operation === 'plus'){
      return firstNumber + secondNumber
   } else if (operation === 'minus'){
      return firstNumber - secondNumber
   } else if (operation === 'multipli'){
      return firstNumber * secondNumber
   } else if (operation === 'division'){
      return firstNumber / secondNumber
   } else return "Нет такой операции"
}

let result = simpleCalc(1,3,'minus')
console.log(result)

console.log('Объекты:')
const iAm = 
{
   name:'andrey',
   age: 18,
   isChel: false,
   sayHello(name){
      console.log(`Hello ${name}`)
   }
}
iAm.sayHello('Vika')

const users = [
   {
      name:'alex',
      age: 23,
      isAdmin: false,
   },
   {
      name:'john',
      age: 20,
      isAdmin: false,
   },
   {
      name:'alexx',
      age: 18,
      isAdmin: false,
   },
   {
      name:'johnn',
      age: 28,
      isAdmin: true,
   },
   {
      name:'aalex',
      age: 40,
      isAdmin: true,
   },
   {
      name:'jjohn',
      age: 93,
      isAdmin: false,
   },
]

let countUs = 0
for (let i = 0; i < users.length;i++){
   if(users[i].isAdmin === false){
      countUs++
   }
}
console.log(`Количество простых пользователей: ${countUs}`)