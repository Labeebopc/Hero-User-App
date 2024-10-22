import React from "react";
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Box } from "@mui/material";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import SendIcon from '@mui/icons-material/Send';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const CustomCard = ({ post }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh"> 
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
        </Box>
    );
};

export default CustomCard;
