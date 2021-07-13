import { User } from "../models/schemas/UsersSchema.js"

export const contactSaveForm = () => {
  return (
    (req, res) => {
      let user = new User({
        name: req.body.name,
        firstName: req.body.firstName,
        email: req.body.email,
        age: req.body.age,
        sex: req.body.sex,
        content: req.body.content
      })
      user.save()
        .then(() => {
          res.json({
            message: `your message has been sent`
          })
        })
        .catch((err) => {
          res.json({
            err,
            message: `something went wrong`
          })
        })
    }
  )
}

export const findAllUsers = () => {
  return (
    (_,res) => {
      User.find()
        .then(response => {
          res.json({
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
            message: `Couldn't find the message`
          })
        })
    }
  )  
}

export const updateUser = () => {
  return (
    (req, res) => {
      let userID = req.body.userID

      let updateInfos = {
        name: req.body.name,
        firstName: req.body.firstName,
        email: req.body.email,
        age: req.body.age,
        content: req.body.content
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

      User.findByIdAndRemove(userID)
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