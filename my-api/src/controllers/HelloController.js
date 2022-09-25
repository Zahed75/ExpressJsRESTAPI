exports.Hello=(req,res)=>{

    res.status(200).json({status:"success",data:"Hello This is my first Express rest api"})
}


exports.HelloPost=(req,res)=>{

    res.status(201).json({status:"success",data:"Hello Post Method"})
}