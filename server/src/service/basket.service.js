const { getBasketDB, getBasketByIdDB, createBasketDB, deleteBasketDB } = require('../repository/basket.repository')

async function getBasket() {
    return await getBasketDB()
}

async function getBasketById(product_id) {
   return await getBasketByIdDB(product_id)
}

async function createBasket(product_id) {
    return await createBasketDB(product_id)
}
async function deleteBasket(product_id) {
    return await deleteBasketDB(product_id)
}

module.exports = { getBasket, getBasketById, createBasket, deleteBasket }