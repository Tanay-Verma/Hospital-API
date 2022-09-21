const errorHandlerMiddleware = async (err,req,res,next) => {
    console.log(err)
    if (err.name === 'MongoServerError' && err.code === 11000) return res.status(409).json({msg:'email must be unique'})
    return res.status(500).json({msg:'Something went wrong, please try again'})
}

module.exports = errorHandlerMiddleware