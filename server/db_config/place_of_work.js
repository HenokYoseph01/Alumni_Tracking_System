//Require db connection
const pool = require('../loader/db');

//create place of work table function
const place_of_work_table = ()=>{
    pool.query(`CREATE TABLE place_of_work(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        branch VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,(err,res)=>{
        if(err){
            console.log(err)
        }else{
            console.log('TABLE CREATED SUCCESSFULLY')
        }
    })
}

place_of_work_table();