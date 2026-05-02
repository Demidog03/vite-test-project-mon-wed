
// import { calculateSquare, calculateSquareRoot } from './utils.ts'
import getProducts, { text } from "./products/api/products.api"

// console.log(calculateSquare(4))
// console.log(calculateSquareRoot(16))

// fetch('https://api.escuelajs.co/api/v1/products', {
//     method: 'GET'
// }).then(response => {
//     return response.json()
// }).then(data => {
//     console.log(data)
// }).catch()

// async function getProducts() {
//     try {
//         const response = await fetch('https://api.escuelajs.co/api/v1/products', {
//             method: 'GET'
//         })
//         // throw new Error('Ошибка!!!!!!!!!!!!!')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.error(`Ошибка при получении товаров: ${error}`)
//     }
// }

// getProducts()

await getProducts()
console.log(text)