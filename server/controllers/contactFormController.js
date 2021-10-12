import { ContactFormModel } from '../models/schemas/ContactFormSchema.js';

const messageCrud = {};

//Save form controller ----------------
messageCrud.contactSaveForm = async (req, res, next) => {
   console.log(req.body);
   if (!req.body) {
      res.status(400).send({
         message: `Le formulaire doit être complété`,
      });
   } else {
      let contactForm = await new ContactFormModel({
         name: req.body.name,
         firstName: req.body.firstName,
         email: req.body.email,
         age: req.body.age,
         sex: req.body.sex,
         content: req.body.content,
         status: '',
      });
      contactForm
         .save()
         .then(() => {
            res.json({
               message: `Votre message bien été envoyé!`,
            });
         })
         .catch((err) => {
            console.log(err);
            res.status(500).send({
               message: err || `Une erreur s'est produite`,
            });
         });
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
