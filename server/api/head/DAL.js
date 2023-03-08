//Require pool
const pool = require('../../loader/db');

//Create DAL class
class Head{

    //Login for Head
    static async headLogin(email){
        try {
            //Login query
            const text = "SELECT * FROM head WHERE email=$1";

            //Get Alumni
            const {rows} = await pool.query({
                name: "alumni_login",
                text,
                values: [email]
            });
            //return result
            return rows[0];
        } catch (error) {
            throw error
        }
    }

     //Get account
     static async getHeadAccount(accountId){
        try {
            //query
            const text = "SELECT * FROM account WHERE id = $1"

            //Get account
            const {rows} = await pool.query({
                name:"get_account",
                text,
                values:[accountId]
            })
            //Return results
            return rows[0];
        } catch (error) {
            throw error
        }
    }

    static async getSingleHead(data){
        try {
           const {rows} = await pool.query({
                name:'get_single_head',
                text: `SELECT * FROM head WHERE id = $1`,
                values:[data]
            })

            return rows[0];
        } catch (error) {
            throw error
        }
    }

}

module.exports = Head;