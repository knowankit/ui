const fs = require('fs')
const path = require('path')
const reactDocs = require('react-docgen')

const filePath = path.resolve(__dirname, '..', 'src', 'temp.js')

let docs = {}

fs.readFile(filePath, (err, data) => {
  if (err) {
    return err
  }
  docs = reactDocs.parse(data)
  console.log(JSON.stringify(docs, null, 2))
})
