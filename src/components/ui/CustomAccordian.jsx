import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Table from './Table'
import {RxCross2} from 'react-icons/rx'

/*
@description
The component takes in a list which contains the queries and their result
and generate an accordian for every query and it's cooresponding result.
*/

export default function CustomAccordion({list=[], removeFromList}) {
  return (
    <>
          {list.map((item, index) => (
              <Accordion style={{border: "1.5px solid lightgray"}} key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography>{item.title}</Typography>
                  <RxCross2 style={{'marginLeft' : 'auto', 'paddingTop': '0.2em', 'paddingRight': '0.5em'}} onClick={() => removeFromList(index)}/>
                </AccordionSummary>
                <AccordionDetails>
                
                   <Table rows={item.content.rows} columns={item.content.columns}/>
                 
                </AccordionDetails>
              </Accordion>
           
          ))} 
    </>
  )
}
