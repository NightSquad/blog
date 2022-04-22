let posts = require('../../news.json')

export default function handler(req, res) {
  res.status(200).json({ posts })
}
