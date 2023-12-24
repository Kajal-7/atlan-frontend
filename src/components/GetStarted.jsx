import React from 'react'
import Grid from '@mui/material/Grid'
import Button from "./ui/Button";
import styles from './GetStarted.module.css'
import { Link } from "react-router-dom";

/*
@description
The landing page of the SQL Editor website that redirects to query dashboard page.
*/
const GetStarted = () => {

  return (
    <Grid container spacing={2} className={styles.mainGrid}>
      <Grid
        item
        lg={6}
        xs={12}
        style={{ padding: "3em 3em 3em 8em" }}
      >
        <h1>
        <span style={{color: "rgb(52,60,207)"}}>Database Query Search</span>
        <br/>
        <span style={{color: "black"}}>Made Effortless</span>
        </h1>
        <p>Embark on a seamless data expedition by taking the first step! Start crafting your queries and uncover the full potential of your database experience through our user-friendly platform.</p>
        <Link to={"/query-database"} style={{ textDecoration: "none" }}>
            <Button title="Get Started"/>
        </Link>
      </Grid>
      <Grid
        item
        lg={6}
        xs={12}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <img src='./search.jpg' id={styles.searchImg} alt='#'></img> 
      </Grid>
    </Grid>
  )
}

export default GetStarted
