//Require db connection
const pool = require('../../loader/db');

//create alumni table function
const alumni_table = ()=>{
    pool.query(`DROP TABLE head`,(err,res)=>{
        if(err){
            console.log(err)
        }else{
            console.log('TABLE CREATED SUCCESSFULLY')
            
        }
    })
}

alumni_table();