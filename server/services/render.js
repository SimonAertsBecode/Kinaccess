import axios from 'axios'

const render = {}

render.homeRoutes = async (req, res) => {
  await axios.get(`http://localhost:5000/API/messages/show`)
    .then((response) => {
      res.render('index', {userMessages : response.data.response})
    })
    .catch((err)=>{
      res.send(err)
    })
}

render.checkedRoutes = async (req, res) => {
  await axios.get(`http://localhost:5000/API/messages/show`, {params: { id : req.query.id }})
    .then((userData) => {
      res.render('checked', {userMessages: userData.data})
    })
    .catch(err => {
      res.send(err)
    })
}

render.waitingRoutes = async (req, res) => {
      res.render('waiting')
}

export default render;
