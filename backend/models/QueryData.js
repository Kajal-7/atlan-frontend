const mongoose = require('mongoose')

/*
@description
The following is fetched result schema corresponding to a query.
*/
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