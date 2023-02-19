import style from './Products.module.css'
// import products from '../../storage/products'
import ProductItem from './ProductItem'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Products() {
const [products, setProducts] = useState([])

async function getAllProducts(){
const response = await axios.get('/products')
setProducts(response.data)
}

useEffect(async()=>{
     await getAllProducts()
})
    
    return (
        <>
            <div className={style['boorivia-store']}> </div>
            <div className={style['products-wrapper']}>
                {products?products.map((el) => <ProductItem key={el.id} id={el.id} name={el.name} price={el.price} path={el.path} />):null}
            </div>


        </>

    )
}
export default Products