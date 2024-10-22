import React from 'react'
import { useStyles } from './dashboardStyles'
import { Box, Typography, TextField, Button } from '@mui/material'
import Card from '../card/Card'
import datas from './data.json'

const data = datas

export const Dashboard = () => {
    const classes = useStyles()
    return (
        <>
            <Box component="section" className={classes.dashboardContainer}>
                <Card post={data} />
            </Box>
        </>
    )
}
