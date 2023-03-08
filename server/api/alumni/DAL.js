//This file is the data access layer meant to provide CRUD functionalities for the 
//alumni side of the system

//Require db pool
const pool = require('../../loader/db');

//Create DAL class
class Alumni{

    //static method to register data into the alumni, address, place of work, and registration tables
    static async register(data){
         //Multi query block started
         const client = await pool.connect();
        try {
                //Start transaction
                await client.query('BEGIN');

                //Address query text
                const address_query = `
                INSERT INTO address
                (city,subcity,woreda,kebele,house_no,region) VALUES
                ($1,$2,$3,$4,$5,$6) RETURNING *
                `;

                //input address
               const address = await client.query({
                name: "addAddress",
                text: address_query,
                values: [data.city,data.subcity,data.woreda,data.kebele,data.house_no,data.region]
               });

               //Questionnaire query text
               const questionnaire_query = `
               INSERT INTO questionnaire
               (category_of_work,salary,satisfaction,attainment) VALUES
               ($1,$2,$3,$4) RETURNING *
               `;

               //input questionnaire
               const questionnaire = await client.query({
                name: "addQuestionnaire",
                text: questionnaire_query,
                values: [data.category_of_work,data.salary,data.satisfaction,data.attainment]
               })


               //registeration query
               const registertion = `
               UPDATE alumni SET
               first_name = COALESCE($1,first_name),
               last_name = COALESCE($2,last_name),
               grandfather_name = COALESCE($3,grandfather_name),
               phone_number = COALESCE($4,phone_number),
               phone_number_alt = COALESCE($5,phone_number_alt),
               nationality = COALESCE($6,nationality),
               gender = COALESCE($7,gender),
               email = COALESCE($8,email),
               linkedIn = COALESCE($9,linkedIn),
               address = COALESCE($10,address),
               occupation = COALESCE($11,occupation),
               date_of_graduation = COALESCE($12,date_of_graduation),
               GPA = COALESCE($13,GPA),
               department = COALESCE($14,department),
               questionnaire = COALESCE($15,questionnaire),
               registered = COALESCE($16,registered),
               place_of_work = COALESCE($17,place_of_work)
               WHERE id = $18
               RETURNING *
               `

               //Register alumni
               const {rows} = await client.query({
                name:"registerAlumni",
                text:registertion,
                values:[
                    data.first_name,
                    data.last_name,
                    data.grandfather_name,
                    data.phone_number1,
                    data.phone_number_alt,
                    data.nationality,
                    data.gender,
                    data.email,
                    data.linkedIn,
                    address.rows[0].id,
                    data.occupation,
                    data.date_of_graduation,
                    data.gpa,
                    data.department,
                    questionnaire.rows[0].id,
                    true,
                    data.workname,
                    data.alumniId
                ]
               });

               //Commit transaction
               await client.query("COMMIT");

               //return row as json
               return rows[0];

        } catch (error) {
            //Rollback transaction
            await client.query("ROLLBACK")
            throw error
        }finally{
            client.release();
        }
    }
    

    static async alumniLogin(email){
        try {
            //Login query
            const text = "SELECT * FROM alumni WHERE email=$1";

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
    static async getAlumiAccount(accountId){
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

    static async getSingleAlumni(data){
        try {
           const {rows} = await pool.query({
                name:'get_single_alumni',
                text: `SELECT * FROM alumni WHERE id = $1`,
                values:[data]
            })

            return rows[0];
        } catch (error) {
            throw error
        }
    }

    //upload picture
    static async uploadPhoto(pictureURL,publicId,id){
        try {
            //Query
            const text = 
            `UPDATE alumni SET
             photo_url = COALESCE($1,photo_url),
             photo_public_id = COALESCE($2, photo_public_id)
             WHERE id = $3 RETURNING *
            `
            const {rows} = await pool.query({
                name: 'upload_photo',
                text,
                values: [pictureURL,publicId,id]
            })

            return rows[0];
        } catch (error) {
            throw error
        }
    }
}

    

module.exports = Alumni