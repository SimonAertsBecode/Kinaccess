import mongoose from 'mongoose';
import validator from 'validator';

const { Schema } = mongoose;

const ContactForm = new Schema(
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
      },
      age: {
         type: String,
      },
      sex: {
         type: String,
      },
      content: {
         type: String,
         maxLength: 1024,
         required: true,
      },
      status: {
         type: String,
      },
   },
   { timestamps: true }
);

export const ContactFormModel = mongoose.model('contactForm', ContactForm);
