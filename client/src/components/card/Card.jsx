import React from "react";
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Box, Button } from "@mui/material";

const CustomCard = ({ posts }) => {

    const handleShare = (post) => {
        console.log(post?._id)
        const shareUrl = `${window.location.origin}/post/${post?._id}`;
        // navigator.clipboard.writeText(shareUrl).then(() => {
        //     alert('Link copied to clipboard!');
        // })

        if (navigator.clipboard && navigator.clipboard.writeText) {
            // Primary method using Clipboard API
            navigator.clipboard.writeText(shareUrl).then(() => {
                alert('Link copied to clipboard!');
            }).catch((err) => {
                console.error('Failed to copy: ', err);
            });
        } else {
            // Fallback method if Clipboard API is unavailable
            const tempInput = document.createElement('input');
            tempInput.value = shareUrl;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            alert('Link copied to clipboard using fallback!');
        }

    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Box
                sx={{
                    maxHeight: "80vh",
                    overflowY: "auto",
                    width: 320,
                }}
            >
                {posts?.length > 0 ? (
                    posts?.map((post, index) => (
                        <Card
                            key={index}
                            elevation={3}
                            sx={{
                                width: 300,
                                borderRadius: 2,
                                marginBottom: 2,
                            }}
                        >
                            <CardHeader
                                title={post?.author || "Unknown Author"}
                                subheader={post?.date}
                            />
                            <CardMedia
                                component="img"
                                height="100"
                                image={post?.postImage}
                                alt="post image"
                            />
                            <CardActions>
                                <Typography variant="body2" color="text.secondary">
                                    {post?.likes} likes
                                </Typography>
                            </CardActions>
                            <CardActions>
                                <Button variant="contained" onClick={() => handleShare(post)}>Share</Button>
                            </CardActions>
                        </Card>
                    ))
                ) : (
                    <Typography>No Posts Sorry, Add new Posts</Typography>
                )}
            </Box>
        </Box>
    );
};

export default CustomCard;
