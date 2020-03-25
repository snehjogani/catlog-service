import fs from 'fs'
import BooksModel from '../models/books'

const filePath = './public/catlog.json'

module.exports = (app) => {
  app.get('/catlog', async (req, res) => {
    const { query: { keyword } } = req
    const query = {
      $or: [
        { author: { $regex: keyword, $options: 'i' } },
        { title: { $regex: keyword, $options: 'i' } },
      ],
    }
    await BooksModel.find(query, null, {}, (err, docs) => {
      fs.readFile(filePath, 'utf8', (e, data) => {
        if (e) {
          console.log('fs error', e)
          return
        }
        const catlogData = data ? JSON.parse(data) : []
        catlogData.push(...docs)
        fs.writeFileSync(filePath, JSON.stringify(catlogData))
      })
      res.send({ total: docs.length, data: docs })
    })
  })
}
