import style from "./Basket.module.css"
import basket from "../../context/basket"
import ProductItem from "./ProductItem"
import SumProducts from "./SumProducts"
import CountProducts from "./CountProducts"
// import { useState } from 'react'



function Basket( name, price, path) {



    return (
        <div className={style["wrapper"]}>
            <div className={style["img-basket"]}></div>
            <div className={style["wrapper-basket"]}>
                {basket.map(el => <ProductItem key={el.id} name={el.name} price={el.price} path={el.path} />)}
            </div>
            <div className={style["total-quantity"]}>
                <p>Всего: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                {/* <p className={style["quantity"]}>6 товаров</p> */}
                {basket.map(el => <CountProducts key={el.id}/>)}

            </div>
            <div className={style["total-count"]}>
                <p>Сумма заказа:  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </p>
                {basket.map(el => <SumProducts key={el.id} price={el.price}/>)}
            </div>
            <div className={style["btn"]}></div>
        </div>
    )
}

export default Basket