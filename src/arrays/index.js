// <----------------------->
// Задача 1. Дан массив цен. Тип значения number. Сформировать на его основании новый массив, где значения будут вида ‘100 р’ (цена и знак рубля, в виде строки)
// [100, 150, 200, 250]

const prices = [100, 150, 200, 250]

const formattedPrices = prices.map((price) => `${price} р`)

console.log(formattedPrices)

// <----------------------->
// Задача 2. Дан массив пользователей. Каждый пользователь представлен в виде массива, вида [‘alex’, 32]. Первое значение – имя (строкой), второе возраст, числом. Сформировать на его основе массив, где останутся только пользователя, старше 18 лет.
// [ [‘alex’, 32], [‘tomas’, 17], [‘olga’, 14], [‘andre’, 24] ]

const users = [
  ['alex', 32],
  ['tomas', 17],
  ['olga', 14],
  ['andre', 24],
]

const adults = users.filter((user) => user[1] > 18)

console.log(adults)
// <----------------------->
// Задача 3. Дан массив товаров, в виде объекта – { title: ‘пицца’, price: 100 }. Вычислить общую стоимость всех товаров
//[ { title: ‘пицца’, price: 200 }, { title: ‘баранина’, price: 300 }, { title: ‘креветки’, price: 400 } ]

const products = [
  { title: 'пицца', price: 200 },
  { title: 'баранина', price: 300 },
  { title: 'креветки', price: 400 },
]

const totalCost = products.reduce(
  (accumulator, product) => accumulator + product.price,
  0
)

console.log(totalCost)
