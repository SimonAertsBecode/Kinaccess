import { ContactFormModel } from '../models/schemas/ContactFormSchema.js';
import formsError from '../utils/errorManagement.js';

const messageCrud = {};

//Save form controller ----------------
messageCrud.contactSaveForm = async (req, res, next) => {
   const { name, firstName, email, age, sex, content } = req.body;
   console.log(req.body);
   if (!name && !firstName && !email && !content) {
      res.status(202).json({
         message: `Le formulaire doit être complété`,
      });
   } else {
      try {
         await ContactFormModel.create({ name, firstName, email, age, sex, content });
         res.status(201).json({
            message: `Votre message bien été envoyé!`,
         });
      } catch (err) {
         res.status(206).json(formsError.contactFormError(err));
      }
   }
};

/*----------------------------------------------*/

messageCrud.findAllMessages = async (req, res, next) => {
   await ContactFormModel.find()
      .sort({ _id: -1 })
      .limit(50)
      .then((response) => {
         res.status(200).send({
            response,
         });
      })
      .catch((err) => {
         res.json({
            message: 'something went wrong',
         });
         res.json(err);
      });
};

messageCrud.findMessageById = async (req, res, next) => {
   let messageID = req.body.use;
   await ContactFormModel.findById(messageID)
      .then((response) => {
         res.json({
            response,
         });
      })
      .catch((err) => {
         res.json({
            message: `Couldn't find the user`,
         });
      });
};

messageCrud.updateMessage = async (req, res, next) => {
   let messageID = params._id;
   let updateInfos = {
      name: req.body.name,
      firstName: req.body.firstName,
      email: req.body.email,
      age: req.body.age,
      content: req.body.content,
      status: 'Checked',
   };

   await ContactFormModel.findByIdAndUpdate(messageID, { $set: updateInfos })
      .then(() => {
         res.json({
            message: `user: ${userID} updated`,
         });
      })
      .catch((err) => {
         res.json({
            message: 'something went wrong',
         });
      });
};

messageCrud.deleteMessage = async (req, res, next) => {
   let messageID = req.body._id;
   await ContactFormModel.findByIdAndDelete(messageID)
      .then(() => {
         res.json({
            message: `user: ${userID} has been removed`,
         });
      })
      .catch((err) => {
         res.json({
            message: `couldn't delete user: ${userID}`,
         });
      });
};

export default messageCrud;
