interface Person {
  firstName: string
  lastName: string
  age: number
  address: {
    city: string
    zip: string
    country?: string // страна может быть необязательной
  }
}

// задание по счетчику
function CounterLogger(name: string): {
  increment: () => void
  getCount: () => number
  reset: () => void
} {
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

const logger1 = CounterLogger('Счетчик 1')
const logger2 = CounterLogger('Счетчик 2')

logger1.increment()
logger1.increment()

logger2.increment()
logger2.reset()
logger2.increment()

// задание 2

const person: Person = {
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

const numbers: number[] = [1, 2, 3, 4, 5]

const squaredNumbers: number[] = numbers.map((num) => num ** 2)
const sumOfNumbers: number = numbers.reduce((sum, num) => sum + num, 0)

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
