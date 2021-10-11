import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const UserSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
         minlength: 3,
         maxlength: 25,
         trimp: true,
      },
      firstName: {
         type: String,
         required: true,
         minlength: 3,
         maxlength: 25,
         trimp: true,
      },
      email: {
         type: String,
         required: true,
         validate: validator.isEmail,
         lowercase: true,
         trimp: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
         minlength: 6,
         trimp: true,
      },
   },
   { timestamps: true }
);

//script pwd before sending to DB
UserSchema.pre('save', async function (next) {
   const salt = await bcrypt.genSalt();
   this.password = await bcrypt.hash(this.password, salt);
   next();
});

// desalt password for login
UserSchema.statics.login = async function (email, password) {
   const user = await this.findOne({ email });
   if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
         return user;
      } else {
         throw { message: 'Mot de passe incorrect' };
      }
   } else {
      throw { message: 'email incorrect' };
   }
};

export const UserModel = mongoose.model('User', UserSchema);
