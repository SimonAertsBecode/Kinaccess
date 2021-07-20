import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

const { Schema } = mongoose

const UsersSchema = new Schema({
    name: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 25,
        trimp: true
    },
    firstName: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 25,
        trimp: true
    },
    email: {
        type: String,
        require: true,
        validate: validator.isEmail,
        lowercase: true,
        trimp: true
    },
    password: {
        type: String,
        require: true,
        minLength: 6,
        trimp: true
    }
}, {timestamps: true})

//script pwd before sending to DB
UsersSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


export const UsersModel = mongoose.model('User', UsersSchema)