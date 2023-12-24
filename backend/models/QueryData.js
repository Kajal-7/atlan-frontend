const mongoose = require('mongoose')

const QueryDataSchema = new mongoose.Schema({
  columns: {
    type: [String],
    require: true,
  },
  rows: {
    type: [mongoose.Schema.Types.Mixed],
  },
})

const QueryData = mongoose.model('QueryData', QueryDataSchema)

module.exports = QueryData