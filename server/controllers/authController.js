import { UserModel } from '../models/schemas/UsersSchema.js';
import formsError from '../utils/errorManagement.js';
import jwt from 'jsonwebtoken';

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
   return jwt.sign({ id }, process.env.TOKEN_SECRET, {
      expiresIn: maxAge,
   });
};

const authController = {};

authController.signUp = async (req, res) => {
   const { name, firstName, email, password } = req.body;

   if (!name && !firstName && !email && !password) {
      res.status(202).json({
         message: `Le formulaire doit être complété`,
      });
   }

   try {
      const newUser = await UserModel.create({ name, firstName, email, password });
      res.status(201).json({
         user: newUser._id,
         message: `Vous êtes enregistré(e)`,
      });
   } catch (err) {
      res.status(206).send(formsError.signUpError(err));
   }
};

authController.signIn = async (req, res) => {
   const { email, password } = req.body;

   try {
      const user = await UserModel.login(email, password);
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge });
      res.status(200).json({ user: user });
   } catch (err) {
      res.status(206).send(err);
   }
};

authController.logout = async (req, res) => {
   res.cookie('jwt', '', { maxAge: 1 });
   res.redirect('/');
};

export default authController;
