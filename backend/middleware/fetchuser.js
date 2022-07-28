let jwt=require('jsonwebtoken')
const seqKey="welcome@key"
let fetchuser= (req,res,next)=>{
  const token=req.header('auth-token')
  if(!token){
    res.status(401).send('Login fiirst')
  }
  
  try {
    const data=jwt.verify(token,seqKey)
    req.users=data.users;
    
    next()
    
  } catch (error) {
    res.status(401).send({error})
  }

   
}



module.exports=fetchuser;