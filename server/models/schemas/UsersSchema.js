import mongoose from 'mongoose'

const { Schema } = mongoose

/*
-- name
-- email
-- pwd
-- age
-- mouvement (score - 10)
-- pain (score - 10)
*/

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    firstname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    sex: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    }
}, {timestamps: true})

export const User = mongoose.model('User', UserSchema)