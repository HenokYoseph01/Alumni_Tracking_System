//Require db connection
const pool = require('../loader/db');

//create alumni table function
const alumni_table = ()=>{
    pool.query(`CREATE TABLE alumni(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        phone_number VARCHAR(10) NOT NULL,
        phone_number_alt VARCHAR(10) NOT NULL,
        nationality VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        address INT NOT NULL REFERENCES address ON DELETE SET NULL,
        registration INT REFERENCES registeration ON DELETE RESTRICT,
        occupation VARCHAR(100) NOT NULL,
        place_of_work INT REFERENCES place_of_work ON DELETE SET NULL,
        date_of_graduation DATE NOT NULL,
        GPA NUMERIC(3,2) NOT NULL,
        department VARCHAR(100),
        role VARCHAR(100) DEFAULT 'Alumni',
        photo VARCHAR(200),
        report_warnings INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,(err,res)=>{
        if(err){
            console.log(err)
        }else{
            console.log('TABLE CREATED SUCCESSFULLY')
        }
    })
}

alumni_table();