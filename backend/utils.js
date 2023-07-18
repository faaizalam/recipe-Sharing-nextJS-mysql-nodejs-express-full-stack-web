import Jwt  from "jsonwebtoken";
export const tokens=((data)=>{

    const token=Jwt.sign({
        id:data[0].idusers

        
    },"secretkey",{expiresIn:"35min"})
    return token
})

// AKIA43TWJSSUS6QFAJR6
// UF8hTUnA8xaGRBcqRH9hIh17QZ/87qh154zSypYd