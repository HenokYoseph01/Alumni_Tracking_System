//Require db connection
const pool = require('../../loader/db');

//create registration function
const account_table = ()=>{
    
        pool.query(`CREATE TABLE account(
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) NOT NULL,
            password VARCHAR(100) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,(err,res)=>{
            if(err){
                console.log(err)
            }else{
                console.log('TABLE CREATED SUCCESSFULLY')
                
            }
        })
}

account_table()