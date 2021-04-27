import { mount as productMount} from 'products/ProductsIndex'
import { mount as cartMount } from 'cart/CartShow'

console.log('container')

productMount(document.querySelector('#my-products'))
cartMount(document.querySelector('#my-cart'))