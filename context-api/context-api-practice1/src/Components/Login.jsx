import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} =  useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

  return (
    <div className='flex flex-col items-center p-8 shadow-lg rounded-lg m-4'>
       <h2 className ='text-4xl font-semibold m-4'>Login</h2>
       <input className='' type="text" placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
       <input className='' type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
       <button className = 'm-3' onClick = {handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;
