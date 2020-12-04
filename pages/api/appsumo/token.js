const jwt = require('jsonwebtoken')

export default function handler(req, res) {
  const { username, password } = req.body
  
  const JWT = jwt.sign({
    username: username
  }, 'ASDF1234')

  if (req.method === 'POST') {
    if(username && password) {
      res.status(200).json({ access: JWT })
    }
    else {
      res.status(401).json({ msg: 'To access this API you need a valid username and password' })
    }
    
  }
  else {
    res.status(200).end(JSON.stringify({ response: 'The method to be used must be a POST' }))
  }
}