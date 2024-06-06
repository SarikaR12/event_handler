import React, { useState } from 'react'


const Multistate = () => {
  
  const[input, setinput] = useState({})
 
 
 let handle=(e)=>{
    setinput({ ...input, [e.target.name]: e.target.value });
 }
 
  let submit=()=>{
    console.log(input);
  }
  
    return (
    <div>
        <h1>Multistate</h1><br />

      firstname  <input type="text" name='firstname' onChange={handle} />
      lastname  <input type="text" name='lastname' onChange={handle} />
      E-mail  <input type="text" name='email' onChange={handle}/>
      Password  <input type="text" name='password' onChange={handle} />
      <button onClick={submit}>Submit</button><br /><br />
    </div>
  )
}

export default Multistate;
