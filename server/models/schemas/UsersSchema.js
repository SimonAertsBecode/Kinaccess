import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

const { Schema } = mongoose

const UserSchema = new Schema({
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
UserSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// desalt password for login
UserSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email })
    if(user){
      const auth = await bcrypt.compare(password, user.password)
      if(auth) {
        return user
      } else {
        throw Error('Mot de passe incorrect')
      }
    } else {
      throw Error('email incorrect')
    }
}

export const UserModel = mongoose.model('User', UserSchema)