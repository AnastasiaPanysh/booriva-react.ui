const { pool } = require('../DB')

async function getProductsDB() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM product';
    const data = (await client.query(sql)).rows;
    return data;
}

async function createProductDB(title, price) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `INSERT INTO product (title,price)
          VALUES ($1,$2) RETURNING *`;
        const data = (await client.query(sql, [title, price])).rows;
        await client.query('COMMIT');
        return data;
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(error);
        return [];
    }
}

module.exports = { getProductsDB, createProductDB }