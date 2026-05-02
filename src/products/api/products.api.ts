import axios from "axios"
import type { GetProductsResponse } from "./products.api.types"

export default async function getProducts() {
    try {
        const response = await axios.get<GetProductsResponse>('https://api.escuelajs.co/api/v1/products')
        response?.data?.forEach(product => {
            // на бэкенде что то сломалось (категория почему то пришла как нулл)
            // product.category = null
            console.log(product?.category?.name)
        })
    } catch (error) {
        console.error(`Ошибка при получении товаров: ${error}`)
    }
}

export const text = 'hello'