import React from 'react'
import { useStyles } from './dashboardStyles'
import { Box, Button } from '@mui/material'
import Card from '../card/Card'
import datas from './data.json'
import { Header } from '../header/Header'
import { useNavigate } from 'react-router-dom'

const data = datas

export const Dashboard = () => {
    const classes = useStyles()

    const navigate = useNavigate()

    const handlePost = async () => {
        navigate('/post')
    }
    return (
        <>
            <Box component="section" className={classes.dashboardContainer}>
                <Header />
                <Box className={classes.dashboard}>
                    <Button variant="contained" className={classes.addImageBtn} onClick={handlePost}>Add Image</Button>
                    <Card className={classes.cardContainer} post={data} />
                </Box>
            </Box>
        </>
    )
}
