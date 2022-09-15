import { useState } from "react";
import axios from 'axios';
import { Grid, Snackbar, TextField, Button } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import {Link} from 'react-router-dom';

function SignIn() {

    const [inputState, setInputState] = useState({});
    const [snackbar, setSnackbar] = useState({open: false, severity: ''});


    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setSnackbar({open: false, severity: ''});
    };


    const submitHandler = (event) => {

        event.preventDefault();

        // delete passwordconf and flash form body request
        const { flash, ...data } = inputState;

        axios.post('/auth/signin', data)
            .then(res => {
                setInputState(prev => ({
                    ...prev, ...{
                        "flash": res.data.flash
                    }
                }))
                setSnackbar({open: true, severity: 'success'});
                console.log(snackbar);
            })
            .catch(err => {
                console.log(err);
                setInputState(prev => ({
                    ...prev, ...{
                        "flash": err.response.data.flash
                    }
                }))
                setSnackbar({open: true, severity: 'error'});
                console.log(snackbar);
            })

    }

    const changeInputHandler = (event) => {
        setInputState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }


    return (
        <>
            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={snackbar.severity}>
                    {JSON.stringify(inputState.flash)}
                </MuiAlert> 
            </Snackbar>

            <form onSubmit={submitHandler} >
                
                <legend>Sign in!</legend>

                <Grid container alignItems='center'
                    justifyContent='center' spacing={2}>

                    <Grid container item xs={12} margin="dense">
                        <TextField fullWidth={true} label='e-mail' type="email" name="email" value={inputState.email} onChange={changeInputHandler} />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField fullWidth={true} label='password' type="password" name="password" value={inputState.password} onChange={changeInputHandler} />
                    </Grid>
                    <Grid item xs={12} >
                        <Button type="submit" value="Submit" variant="contained" color="primary"> <Link to='/profile'> Sign In </Link> </Button>
                    </Grid>
                        <Grid item xs={12} >
                            <Button type="submit" value="Submit" variant="text" color="primary"> <Link to='/signup'>Sign Up</Link> </Button>
                        </Grid>
                </Grid>
            </form>
        </>
    )
}

export default SignIn;

