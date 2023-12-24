import React, { memo , useCallback, useEffect,} from 'react'
import CustomAccordian from './ui/CustomAccordian'

/*
@description
The component renders a an accordian which displays
the past queries and their result. 
*/
const QueryHistory = memo(({ list, updateList }) => {

  const fetchDummyData = async () => {
    const response = await fetch('https://sql-editor.onrender.com/api/query', {
      method: 'POST',
      body: JSON.stringify({ query: '' }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result = await response.json()
    return result
  }

  useEffect(() => {
    //Handles generating predefined query and result on initial load on applicaion
    let storedList = localStorage.getItem('list')

    if (storedList) {
      let parsedList = JSON.parse(storedList)
      updateList(parsedList)
      return
    }
    let tableNames = ['Orders', 'Customers'] 
    for (let tableName of tableNames){
      fetchDummyData().then((data) => {
        updateList((oldList) => {
          const newList = [
            ...oldList,
            {
              title:
                `SELECT * FROM ${tableName}` ,
              content: { rows: data.rows, columns: data.columns },
            },
          ]
          localStorage.setItem('list', JSON.stringify(newList))
          return newList
        })
      })
    }

  }, [updateList])

  const removeFromList = useCallback(
    (id) => {
      //Removes a query from the list and updates local storage
      let newList = list.filter((query, index) => index !== id)
      updateList(newList)
      localStorage.setItem('list', JSON.stringify(newList))
    },
    [list, updateList]
  )

  return (
    <div style={{ width: '90%' }}>
      <CustomAccordian list={list} removeFromList={removeFromList} />
    </div>
  )
})

export default QueryHistory