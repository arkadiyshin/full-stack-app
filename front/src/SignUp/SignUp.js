import { useState } from "react";
import axios from 'axios';


function SignUp() {

    const [inputState, setInputState] = useState({});

    const submitHandler = (event) => {

        event.preventDefault();

        // delete passwordconf form body request
        const { passwordconf, flash, ...data } = inputState;

        axios.post('/auth/signup', data)
            .then(res => {
                setInputState(prev => ({
                    ...prev, ...{
                        "flash": res.data.flash
                    }
                }))
            })
            .catch(err => {
                setInputState(prev => ({
                    ...prev, ...{
                        "flash": err.data.flash
                    }
                }))
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
        <form onSubmit={submitHandler}>

            <h1>{JSON.stringify(inputState, 1, 1)}</h1>

            <input type="email" name="email" value={inputState.email} onChange={changeInputHandler} />
            <input type="password" name="password" value={inputState.password} onChange={changeInputHandler} />
            <input type="password" name="passwordconf" value={inputState.passwordconf} onChange={changeInputHandler} />
            <input type="text" name="name" value={inputState.name} onChange={changeInputHandler} />
            <input type="text" name="lastname" value={inputState.lastname} onChange={changeInputHandler} />

            <input type="submit" value="Submit" />

        </form>
    )
}

export default SignUp;