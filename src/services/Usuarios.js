import * as pg from 'pg';

const pool = new pg.Pool({
    connectionString:process.env.DATABASE_URL
})

const AddNewUser = async (body)=> {
    const query = await pool.query('');
};