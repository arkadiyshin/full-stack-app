import { useState } from "react";


function SignUp() {
const [email, setEmail] = useState('test@test.com');
    return (
        <>
            <h1>{email}</h1>
            <input type="email" name="email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
        </>
    )
}

export default SignUp;