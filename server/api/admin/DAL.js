
//Require db pool
const pool = require('../../loader/db');

//Admin DAL

class Admin{
    static async createAlumniAccount(data){
        //Multi query block started
        const client = await pool.connect();
        try {
            //Start transaction
            await client.query('BEGIN');

            //Alumni Account query text
            const alumni_account = `
            INSERT INTO account(username,password)
            VALUES ($1, $2) RETURNING *
            `

            //input account
            const account = await client.query({
                name: "alumni_account_creation",
                text: alumni_account,
                values: [data.email,data.password]
            });
            
            //Alumni information query text
            const alumni_info = `
            INSERT INTO alumni
            (first_name,last_name,grandfather_name,email,gender,GPA,date_of_graduation,account,department)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *
            `;

            //input alumni
            const {rows} = await client.query({
                name: "add_alumni",
                text: alumni_info,
                values: [
                    data.first_name,
                    data.last_name,
                    data.grandfather_name,
                    data.email,
                    data.gender,
                    data.gpa,
                    data.graduation_year,
                    account.rows[0].id,
                    data.department
                ]
            })
            
            //Commit Transaction
            await client.query('COMMIT');

            //return values
            return rows[0];
        } catch (error) {
            await client.query("ROLLBACK")
            throw error
        }finally{
            client.release();
        }
    }

    //Get single Admin
    static async getSingleAdmin(data){
        try {
           const {rows} = await pool.query({
                name:'get_single_alumni',
                text: `SELECT * FROM admin WHERE id = $1`,
                values:[data]
            })

            return rows[0];
        } catch (error) {
            throw error
        }
    }

    //Create Head account
    static async createHeadAccount(data){
        //Multi query block started
        const client = await pool.connect();
        try {
            //Start transaction
            await client.query("BEGIN");
            
            //Account query
            const accountText = `
            INSERT INTO account(username,password)
            VALUES ($1, $2) RETURNING *
            `

            //Create Account
            const account = await client.query({
                name: 'head_account',
                text: accountText,
                values: [data.email,data.password]
            })

            //Head query
            const headText = `
            INSERT INTO head(first_name,last_name,grandfather_name,
                email,phone_number,department,account) VALUES
                ($1,$2,$3,$4,$5,$6,$7) RETURNING *
            `
    
            //Create Head
            const {rows} = await client.query({
                name: 'head_creation',
                text: headText,
                values:[
                    data.first_name,
                    data.last_name,
                    data.grandfather_name,
                    data.email,
                    data.phone_number,
                    data.department,
                    account.rows[0].id
                ]
            })
            //Commit
            await client.query('COMMIT')
            //Return results
            return rows[0];
        } catch (error) {
            await client.query("ROLLBACK");
            throw error
        }finally{
            client.release()
        }
    }
}

module.exports = Admin