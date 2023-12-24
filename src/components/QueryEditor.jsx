import React, { memo, useCallback, useState } from 'react'
import TextBox from './form/TextBox'
import Button from './ui/Button'
import { Alert } from '@mui/material'

/*
@description
The component allows user to enter a query and validates it.
*/

const QueryEditor = memo(({onValidationSuccess, list}) => {
  const [query, setQuery] = useState()
  const [error, setError] = useState('')

  const onQuerySubmitHandler = useCallback(async () => {  
    if (!query) {
      setError('Please provide some query.')
      return
    }

    let queryAlreadyExists = list.some((item) => item.title.toLowerCase() === query.toLowerCase())
    if (queryAlreadyExists) {
      setError('Query already exists in the history section.')
      return
    }

    setError(false)
    onValidationSuccess(query)
  },[query, list, onValidationSuccess])

  return (
    <div style={{ width: '90%' }}>
      {error && (
        <Alert style={{ marginBottom: '5px' }} severity='error'>
          {error}
        </Alert>
      )}
      <TextBox setQuery={setQuery} />
      <Button onClick={onQuerySubmitHandler} title='Run' />
    </div>
  )
})

export default QueryEditor