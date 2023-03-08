//Require DAL
const Head = require('./DAL');

//Require AppError
const AppError = require('../../utils/appError');

//Require comparePassword
const comparePassword = require('../../utils/comparePassword');

//Require createToken
const createToken = require('../../utils/createToken');



exports.login = async(req,res,next)=>{
    try {
        //Get input from body
        const {email,password} = req.body;

        //Check if email or password has been provided
        if(!email||!password) return next(new AppError("Please fill all required fields",400))

        //Get alumni
        const head = await Head.headLogin(email);

       // Check if alumni exists
        if(!head) return next(new AppError('Wrong email or password',400));

        //Get the alumni account
        const account = await Head.getHeadAccount(head.account)
       
        //Check if password is correct
        if(!comparePassword(password.toString(),account.password)) return next(new AppError('Wrong email or password'))

        //Create token
        const headToken = createToken({id: head.id, role:"Head"});

        //Response
        res.status(200).json({
            status:"SUCCESS",
            message: "Successfully logged in",
            data: {
                head
            },
            headToken
        })

    } catch (error) {
        next(error)
    }
}

