//Require DAL
const Alumni = require('./DAL');

//Require AppError
const AppError = require('../../utils/appError');

//Require comparePassword
const comparePassword = require('../../utils/comparePassword');

//Require createToken
const createToken = require('../../utils/createToken');

//Pool
const pool = require('../../loader/db')

//Require Cloudinary
const cloudinary = require('../../utils/cloudinary');

//Require fs
const fs = require('fs')

//Alumni Controllers

//Register Alumni
exports.register = async(req,res,next)=>{
    try {
        //Get data from body
        const {
            first_name,
            last_name,
            grandfather_name,
            phone_number1,
            phone_number_alt,
            nationality,
            city,
            subcity,
            woreda,
            kebele,
            region,
            house_no,
            linkedIn,
            occupation,
            workname,
            date_of_graduation,
            category_of_work,
            salary,
            satisfaction,
            attainment
            } = req.body

            //Check if data is provided
            if(
                !phone_number1||
                !nationality||
                !city||
                !subcity||
                !woreda||
                !kebele||
                !region||
                !house_no||
                !occupation||
                !workname||
                !salary||
                !attainment||
                !category_of_work||
                !satisfaction
                ) return next(new AppError('Please provide needed data',400))

               if(req.user.registered) return next(new AppError('You have already registered',400));
                //data variable to hold all data
                const data = req.body;
                data.alumniId = req.user.id

                //call DAL
                const register = await Alumni.register(data);

                //Get alumni photo
                const picture = req.file.path;

                req.data = {
                    register,
                    picture
                }
             
            //Move to next middleware
              next();
    } catch (error) {
        next(error)
    }
}

exports.uploadPhoto = async(req,res,next)=>{
    try {
        
        //Upload file to cloudinary
        cloudinary.uploader.upload(req.data.picture,{folder:`Alumni/${req.data.register.date_of_graduation}`})
        .then(result=>{
            const text = 
            `UPDATE alumni SET
             photo_url = COALESCE($1,photo_url),
             photo_public_id = COALESCE($2, photo_public_id)
             WHERE id = $3 RETURNING *
            `
            pool.query({
                name:'uploadPhoto',
                text,
                values:[result.secure_url,result.public_id,req.data.register.id]
            }).then(data => {
                const register = data.rows[0]

                //Delete photo from file
                fs.unlinkSync(req.data.picture)
                
                 //Send response
                res.status(200).json({
                success:true,
                message: 'Successfully Registered',
                data:{register}
                })
            }).catch(err=>{return next(new AppError('Issue with registration',400))})
          
            
        }).catch(err=>{return next(new AppError('Problem with uploading picture',500))})
        
    } catch (error) {
        next(error)
    }
}

exports.login = async(req,res,next)=>{
    try {
        //Get input from body
        const {email,password} = req.body;

        //Check if email or password has been provided
        if(!email||!password) return next(new AppError("Please fill all required fields",400))

        //Get alumni
        const alumni = await Alumni.alumniLogin(email);

       // Check if alumni exists
        if(!alumni) return next(new AppError('Wrong email or password',400));

        //Get the alumni account
        const account = await Alumni.getAlumiAccount(alumni.account)
       
        //Check if password is correct
        if(!comparePassword(password.toString(),account.password)) return next(new AppError('Wrong email or password'))

        //Create token
        const alumniToken = createToken({id: alumni.id, role:"Alumni"});

        //Response
        res.status(200).json({
            status:"SUCCESS",
            message: "Successfully logged in",
            data: {
                alumni
            },
            alumniToken
        })

    } catch (error) {
        next(error)
    }
}

exports.test = async(req,res,next)=>{
    try {
        const data = req.body

        const test = await Alumni.test(data)

        res.status(200).json({
            success:true,
            data:{test}
        })
    } catch (error) {
        next(error)
    }
}