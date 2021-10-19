import { UserModel } from '../models/schemas/UsersSchema.js';
import ObjectID from 'mongoose';
const objectId = ObjectID;

const userController = {};

userController.getAllUsers = async (_, res) => {
   const users = await UserModel.find().select('-password');
   res.status(200).json(users);
};

userController.userInfo = async (req, res) => {
   if (!objectId.isValidObjectId(req.params.id)) {
      return res.status(400).send(`ID unknown : ${req.params.id} `);
   } else {
      await UserModel.findById(req.params.id)
         .select('-password')
         .then((docs) => {
            res.status(200).send(docs);
         })
         .catch((err) => {
            res.json({
               message: `ID ${req.params.id} unknown`,
               error: err,
            });
         });
   }
};

userController.updateUser = async (req, res) => {
   if (!objectId.isValidObjectId(req.params.id)) {
      return res.status(400).send(`ID unknown : ${req.params.id} `);
   } else {
      await UserModel.findOneAndUpdate(
         { _id: req.params.id },
         {
            $set: {
               name: req.body.name,
               firstName: req.body.firstName,
               email: req.body.email,
            },
         },
         { new: true, upsert: true, setDefaultsOnInsert: true }
      )
         .then((docs) => {
            res.send(docs);
         })
         .catch((err) => {
            res.status(500).send({ message: err });
         });
   }
};

userController.deleteUser = async (req, res) => {
   if (!objectId.isValidObjectId(req.params.id)) {
      return res.status(400).send(`ID unknown : ${req.params.id} `);
   } else {
      await UserModel.findByIdAndDelete(req.params.id)
         .then(() => {
            res.status(200).json({
               message: `${req.body.firstName} has been successfully deleted.`,
            });
         })
         .catch(() => {
            res.status(500).json({
               message: err,
            });
         });
   }
};

export default userController;
