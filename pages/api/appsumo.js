export default async (req, res) => {
  
  console.log(req)
  res.status(200).end(JSON.stringify({ response: req }))
}