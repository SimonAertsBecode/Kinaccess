import axios from 'axios'

export const homeRoutes = () => {
  return(
    (req, res) => {
      axios.get(`http://localhost:5000/API/back-office/show`)
        .then((response) => {
          res.render('index', {users : response.data.response})
        })
        .catch((err)=>{
          res.send(err)
        })
    }
  )
}

export const checkedRoutes = () => {
  return(
    (req, res) => {
      axios.get(`http://localhost:5000/API/back-office/show`, {params: { id : req.query.id }})
        .then((userData) => {
          res.render('checked', {user: userData.data})
        })
        .catch(err => {
          res.send(err)
        })
    }
  )
}

export const waitingRoutes = () => {
  return(
    (req, res) => {
      res.render('waiting')
    }
  )
}

