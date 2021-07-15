import axios from 'axios'

export const homeRoutes = () => {
  return(
    (req, res) => {
      axios.get(`http://localhost:5000/API/back-office/show`)
        .then((response) => {
          console.log(response)
          res.render('index', {users : response.data.response})
        })
        .catch((err)=>{
          res.send(err)
        })
    }
  )
}