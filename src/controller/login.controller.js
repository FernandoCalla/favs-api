import User from '../model/user.model.js'
import jwt from 'jsonwebtoken'
export async function loginHandler(req, res) {
    const {body}=req
    const{email,password}=body
    const user=await User.findOne({email})
    const passwordCorrect = user === null? false : password===user.password;
    if(!(user && passwordCorrect)){
        res.status(400).json({ message: "usuario no puede entrar" })
    }
    const userToken={
        id:user._id,
        email:user.email
    }
    console.log("var",process.env.SECRET)
    const token=jwt.sign(userToken,process.env.SECRET,{expiresIn:60*60*24*7})
    res.status("200").json({
        email:user.email,
        token:token
    })
    // try {
    //   const fav = await createFav(req.body)
    //   res.status(201).json({ message: 'Fav created', fav })
    // } catch (error) {
    //   res.status(400).json({ message: error.message })
    // }
  }