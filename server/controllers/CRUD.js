import { User } from "../models/schemas/UsersSchema.js"

export const contactSaveForm = () => {
  return (
    (req, res) => {
      if(!req.body){
        res.status(400).send(`Le formulaire doit être complété`)
      }

      let user = new User({
        name: req.body.name,
        firstName: req.body.firstName,
        email: req.body.email,
        age: req.body.age,
        sex: req.body.sex,
        content: req.body.content,
        status: ''
      })
      user.save()
        .then(() => {
          res.json({
            message: `your message has been sent`
          })
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || `Une erreur s'est produite`
          })
        })
    }
  )
}

export const findAllUsers = () => {
  return (
    (_,res) => {
      User.find()
        .sort({ _id: -1 })
        .limit(50)
        .then(response => {
          res.status(200).send({
            message : `Votre message bien été envoyé!`,
            response
          })
        })
        .catch(err => {
          res.json({
            message: 'something went wrong'
          })
          res.json(err)
        })
    }
  )
}

export const findUserById = () => {
  return (
    (req, res) => {
      let userID = req.body.user

      User.findById(userID)
        .then(response => {
          res.json({
            response
          })
        })
        .catch(err => {
          res.json({
            message: `Couldn't find the user`
          })
        })
    }
  )  
}

export const updateUser = () => {
  return (
    (req, res) => {
      let userID = params._id

      let updateInfos = {
        name: req.body.name,
        firstName: req.body.firstName,
        email: req.body.email,
        age: req.body.age,
        content: req.body.content,
        status: 'Checked'
      }
    
      User.findByIdAndUpdate(userID, {$set: updateInfos})
        .then(() => {
          res.json({
            message: `user: ${userID} updated`
          })
        })
        .catch(err =>{
          res.json({
            message: 'something went wrong'
          })
        })
    }
  )
}

export const deleteUser = () => {
  return (
    (req, res) => {
      let userID = req.body.userID

      User.findByIdAndDelete(userID)
       .then(() => {
         res.json({
           message: `user: ${userID} has been removed`
         })
       })
       .catch(err => {
         res.json({
           message: `couldn't delete user: ${userID}`
         })
       })
    }
  ) 
}