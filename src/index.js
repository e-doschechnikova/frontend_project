import Flag from './assets/Flag_of_the_Soviet_Union.png'

document.getElementById('image').src = Flag

// задание по счетчику
function CounterLogger(name) {
  let count = 0

  function increment() {
    count++
    console.log(`${name}: ${count}`)
  }

  return {
    increment: increment,
    getCount: () => count,
    reset: () => {
      count = 0
      console.log(`${name} сброшен.`)
    },
  }
}

const logger1 = new CounterLogger('Счетчик 1')
const logger2 = new CounterLogger('Счетчик 2')

logger1.increment()
logger1.increment()
console.log(logger1.getCount())

logger2.increment()
logger2.reset()
logger2.increment()

// задание 2

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
}

person.age = 31
person.address.country = 'USA'

const numbers = [1, 2, 3, 4, 5]

const squaredNumbers = numbers.map((num) => num ** 2)
const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0)

console.log(person)
/*
{
  firstName: 'John',
  lastName: 'Doe',
  age: 31,
  address: { city: 'New York', zip: '10001', country: 'USA' }
}
*/

console.log(squaredNumbers) // [1, 4, 9, 16, 25]
console.log(sumOfNumbers) // 15
