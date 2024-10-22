import React from "react";
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Box } from "@mui/material";


const CustomCard = ({ post }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">

            {
                post.length > 0 ?
                    <Card elevation={3} sx={{ width: 300, borderRadius: 2 }}>
                        <CardHeader
                            title={post.author || "Unknown Author"}
                            subheader={post.date}
                            action={
                                <IconButton>
                                </IconButton>
                            }
                        />
                        <CardMedia
                            component="img"
                            height="140"
                            image={post.postImage}
                            alt="post image"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {post.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant="body2" color="text.secondary">
                                {post.likes} likes
                            </Typography>
                        </CardActions>
                    </Card>

                    : 

                    "No Posts Sorry, Add new Posts"

        }

        </Box>
    );
};

export default CustomCard;
