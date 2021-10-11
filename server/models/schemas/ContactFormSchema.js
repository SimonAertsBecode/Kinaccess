import mongoose from 'mongoose';
import validator from 'validator';

const { Schema } = mongoose;

const ContactForm = new Schema(
   {
      name: {
         type: String,
         require: true,
      },
      firstName: {
         type: String,
         require: true,
      },
      email: {
         type: String,
         unique: true,
         validate: validator.isEmail,
         require: true,
      },
      age: {
         type: Number,
         require: true,
      },
      sex: {
         type: String,
         require: true,
      },
      content: {
         type: String,
         maxLength: 1024,
         require: true,
      },
      status: {
         type: String,
      },
   },
   { timestamps: true }
);

export const ContactFormModel = mongoose.model('contactForm', ContactForm);
