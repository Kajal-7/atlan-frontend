import React, { memo } from 'react'
import Table from './ui/Table'

/*
@description
The component allows user to enter a query and also displays it's cooresponding result.
*/

const QueryResult = memo(({ queryResult }) => {
  return (
    <div style={{ width: '90%' }}>
      {queryResult && (
        <Table rows={queryResult.rows} columns={queryResult.columns} />
      )}
    </div>
  )
})

export default QueryResult