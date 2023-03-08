///Require AppError
const AppError = require('../../utils/appError');

//Require DAL
const Admin = require('./DAL');

//Require Path
const fs = require('fs')

//Require OTP-generaor
const otp = require('otp-generator');

//Require bcrypt
const bcrypt = require('bcrypt');

//Require Excel Reader
const reader = require('../../utils/readExcel');

//Admin Controllers

//Create Alumni Account
exports.createAlumniAccount = async(req,res,next)=>{
    try {
        //get uploaded list
        const list = await reader(req.file.path);

        //alumni created
        const alumni_created = [];

        //Loop through graduates and assign account 
       for(i in list){
        const data = {};
        if(i === '0') continue
        for(j in list[i]){
            if(j === '0') continue
            switch(j){
                case '1': data.first_name = list[i][j]; break;
                case '2': data.last_name = list[i][j]; break;
                case '3': data.grandfather_name = list[i][j]; break;
                case '4': data.gender = list[i][j]; break;
                case '5': data.gpa = list[i][j]; break;
                case '6': data.graduation_year = list[i][j]; break;
                case '7': data.email = list[i][j]; break;
                case '8': data.department = list[i][j]; break;
            }
        }
        //create random password for alumni account
        const password = otp.generate(5,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false})
        console.log(password)
        //store password in data object
        data.password = await bcrypt.hash(password, 8);
        //Create alumni
        const alumni = await Admin.createAlumniAccount(data)
        //Send an email with the credentials and password to the alumni
        /*Code*/
        //Save in alumni_created_tab
        alumni_created.push(alumni)
        
       }
       //Delete file from file path
        fs.unlinkSync(req.file.path)

        //Response
        res.status(200).json({
            success: true,
            message: 'SUCCESSFULLY CREATED THE ACCOUNTS',
            data: {alumni_created}
        })
    } catch (error) {
        next(error)
    }
}

//Create Head Account
exports.createHeadAccount = async(req,res,next)=>{
    try {
        //Get data from body
        const{
            first_name,
            last_name,
            grandfather_name,
            phone_number,
            email,
            department
        }=req.body;

        //Check if all details are provided
        if(!first_name||
            !last_name||
            !grandfather_name||
            !phone_number||
            !email||
            !department) return next(new AppError('Please fill in the required details',400));

        //Generate password
        const password = otp.generate(5,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false})
        console.log(password)
        //Hash password and store it in body
        req.body.password = await bcrypt.hash(password, 8);

        //Create head
        const head = await Admin.createHeadAccount(req.body);

        //send response
        res.status(200).json({
            success:true,
            message: 'Head account has been created',
            data:{
                head
            }
        })
    } catch (error) {
        next(error)
    }
}