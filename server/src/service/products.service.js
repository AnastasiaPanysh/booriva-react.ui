const { getProductsDB, createProductDB } = require('../repository/products.repository')

async function getProducts() {
    const products = await getProductsDB()
    if (!products.length) throw new Error('products DB is empty')
    return products
}
async function createProduct(title, price) {
    const products = await createProductDB(title, price)
    if (!products.length) throw new Error('products DB is empty')
    return products
}

module.exports = { getProducts, createProduct }