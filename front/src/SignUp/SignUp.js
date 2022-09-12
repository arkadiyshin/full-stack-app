import { useState } from "react";


function SignUp() {
    
    const [inputState, setInputState] = useState({});

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(inputState);
    }

    const changeInputHandler = (event) => {
        setInputState( prev => ({...prev, ...{ 
            [event.target.name]: event.target.value 
        }}))
    }

    return (
        <form onSubmit={submitHandler}>
            
            <h1>{JSON.stringify(inputState,1,1)}</h1>

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