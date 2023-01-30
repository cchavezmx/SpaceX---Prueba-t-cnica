import fetch from 'node-fetch'

export default async function handler(req, res) {
  const query = "https://api.spacexdata.com/v3/launches"

  const response = await fetch(query)
  .then(r => r.json())
  .then(json => json)
  .catch(err => res.status(500).json({ error: err.message }))
  
  return res.status(200).json(response)
}