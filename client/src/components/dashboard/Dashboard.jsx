import React, { useEffect, useState } from 'react'
import { useStyles } from './dashboardStyles'
import { Box, Button } from '@mui/material'
import Card from '../card/Card'
import datas from './data.json'
import { Header } from '../header/Header'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../../services/user'

const data = datas

export const Dashboard = () => {
    const classes = useStyles()
    const { user } = useSelector(state => state.user)
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        allPosts()
    }, [])

    const allPosts = async () => {
        let res = await getAllPosts(user.token)
        // console.log(res.allUsers, "users")
        // setPosts(res.allUsers)
    }

    const handlePost = async () => {
        navigate('/post')
    }
    return (
        <>
            <Box component="section" className={classes.dashboardContainer}>
                <Header />
                <Box className={classes.dashboard}>
                    <Button variant="contained" className={classes.addImageBtn} onClick={handlePost}>Add Image</Button>
                    <Card className={classes.cardContainer} post={posts} />
                </Box>
            </Box>
        </>
    )
}
