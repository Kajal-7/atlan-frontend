import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import QueryHistory from './QueryHistory'
import QueryHandler from './QueryHandler'

/*
@description
The component renders both query editor and query history section.
This component also deals with updating the query history list state.
*/
const QueryDashboard = () => {
  const [list, setNewList] = useState([])

  return (
    <Grid container spacing={2} style={{ padding: '2.2em 0' }}>
      <Grid
        item
        lg={6}
        xs={12}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <QueryHandler updateList={setNewList} list={list} />
      </Grid>
      <Grid
        item
        lg={6}
        xs={12}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <QueryHistory list={list} updateList={setNewList} />
      </Grid>
    </Grid>
  )
}

export default QueryDashboard
