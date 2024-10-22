import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileBase64 from 'react-file-base64';
import { TextField, Button, Typography, Grid, Paper } from '@mui/material';
import './form.css';
import { Header } from "../header/Header";

const Form = () => {
    const [form, setForm] = useState({ postImage: "", description: "" });
    const navigate = useNavigate();
    const isAllInputsValied = form.postImage.length && form.description.length;
    const [isValid, setIsValied] = useState(false);

    const handlePost = (e) => {
        e.preventDefault();

        if (!isAllInputsValied) {
            setIsValied(true);
            return; // Early return to avoid making the request if fields are invalid
        } else {
            setIsValied(false);
        }

        console.log(form);

        axios.post("http://localhost:5000/api/v1/posts/addpost", {
            postImage: form.postImage.base64,
            description: form.description
        })
            .then(() => navigate("/dashboard"));
    };

    return (
        <>
            <Header />
            <form className="form" onSubmit={handlePost}>
                <Grid container spacing={2} padding={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>
                            Add a Post
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FileBase64
                            multiple={false}
                            onDone={(base64) => setForm({ ...form, postImage: base64 })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Description"
                            name="description"
                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                            value={form.description}
                            error={isValid}
                            helperText={isValid ? "All fields are mandatory" : ""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                        // onClick={handlePost}
                        >
                            Post
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default Form;
