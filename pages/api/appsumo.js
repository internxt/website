const jwt = require('jsonwebtoken')

export default function handler(req, res) {
  const username = req.body.username //const username = 'fran'
  const password = req.body.password  //const password = 'villalba'
  const JWT = jwt.sign({
    username: username
  }, 'ASDF1234')

  if (req.method === 'POST') {
    res.status(200).json({ JWT })
  }
  else {
    res.status(200).end(JSON.stringify({ response: 'adads' }))
  }

  console.log(req)
  //res.status(200).end(JSON.stringify({ response: 'adads' }))
}