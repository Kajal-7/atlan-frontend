/*
@description
The function is used for generating the output data for the query. 
It pickes a random data file out of the 3 available and convert in appropriate format.
*/

const queryResultGenerator = (queryData) => {
    const randomFile = queryData[Math.floor(Math.random()*queryData.length)]
    let rows = randomFile.rows.map((row, index) => {
        return {...row, id: index}
    })
    let columns = randomFile.columns.map((column) => {
        return {
          field: column,
          headerName: column,
          headerAlign: 'center',
          headerClassName: 'table_header',
        }
    })
    return {rows, columns}
}

module.exports = queryResultGenerator;