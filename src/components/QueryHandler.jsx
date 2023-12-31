import React, { memo, useCallback, useState } from 'react'
import QueryResult from './QueryResult'
import QueryEditor from './QueryEditor'
import Loader from './ui/Loader'

/*
@description
The component fetches the result corresponding to the query from database.
*/
const QueryHandler = memo(({ updateList, list }) => {
  const [queryResult, setQueryResult] = useState()
  const [loading, setLoading] = useState(false)

  const addItemInList = useCallback(
    (result, query) => {
      //Adds a new query to the list and updates the local storage
      let newList = [
        ...list,
        {
          title: query,
          content: { rows: result.rows, columns: result.columns },
        },
      ]
      updateList(newList)
      localStorage.setItem('list', JSON.stringify(newList))
    },
    [list, updateList]
  )

  const fetchQueryResult = useCallback(async (query) => {  
    setLoading(true)
    const response = await fetch(' https://sql-editor.onrender.com/api/query',{
      method: 'POST',
      body: JSON.stringify({query}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
    setLoading(false)
    setQueryResult(result)
    addItemInList(result, query)
  }, [addItemInList])

  return (
    <div style={{ width: '90%' }}>
      <QueryEditor onValidationSuccess={fetchQueryResult} list={list}></QueryEditor>
      {loading ? <Loader/> :  <QueryResult queryResult={queryResult}></QueryResult>}
    </div>
  )
})

export default QueryHandler