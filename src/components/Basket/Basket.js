import style from "./Basket.module.css"
import { basket } from "../../context/basket"
import ProductItem from "./ProductItem"
import SumProducts from "./SumProducts"
import CountProducts from "./CountProducts"
import { useState } from 'react'



function Basket(id, name, price, path) {
    let [arrayBasket, setArrayBasket] = useState(basket)



    function doDeclination() {
        let amount = 0
        if (arrayBasket.length === 1) amount = `${arrayBasket.length} товар`
        else if (arrayBasket.length === 2 || arrayBasket.length === 3 || arrayBasket.length === 4)  amount = `${arrayBasket.length} товара`
        else amount = `${arrayBasket.length} товаров`
        
        return amount
    }

    return (
        <div className={style["wrapper"]}>
            <div className={style["img-basket"]}></div>
            <div className={style["wrapper-basket"]}>
                {arrayBasket.map(el => <ProductItem setArrayBasket={setArrayBasket} arrayBasket={arrayBasket} key={el.id} id={el.id} name={el.name} price={el.price} path={el.path} />)}
            </div>

            <div className={style["total-quantity"]}>
                <p>Всего: . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                <p className={style["quantity"]}>{doDeclination()}</p>
            </div>
            <div className={style["total-count"]}>
                <p>Сумма заказа:  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </p>
                <p className={style["count"]}>{arrayBasket.reduce((sum, el) => sum + el.price, 0)} ₴</p>
            </div>
            <div className={style["btn"]}></div>
        </div>
    )
}

export default Basket