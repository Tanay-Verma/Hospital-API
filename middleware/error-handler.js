const errorHandlerMiddleware = async (err,req,res,next) => {
    console.log(err)
    if(err.message === 'no user found') return res.status(404).json({
        success:false,
        msg:err.message
    })
    if (err.name === 'MongoServerError' && err.code === 11000) return res.status(409).json({
        success:false,
        msg:'email must be unique'})
    return res.status(500).json({
        success:false
        ,msg:'Something went wrong, please try again'})
}

module.exports = errorHandlerMiddleware