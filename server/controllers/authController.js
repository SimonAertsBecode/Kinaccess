import { UsersModel } from "../models/schemas/UsersSchema.js"

const userAuth = {}

userAuth.signUp = async (req, res, next) => {
    const {name, firstName, email, password} = req.body

    try {
        const newUser = await UsersModel.create({name, firstName, email, password})
        res.status(201).json({ user: newUser._id})
    } 
    catch(err) {
        res.status(200).send({err})
    }
}

export default userAuth