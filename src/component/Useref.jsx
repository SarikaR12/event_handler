import React, { useRef } from 'react'

const Useref = () => {

    let email=useRef();
    let password=useRef();

    function handleSubmit(e){
        let data={
            email: email.current.value,
            password: password.current.value,
        };
        console.log(data);
    }
  return (
    <div>
        <h1>Useref</h1><br />
      Email<input type="text" ref={email} />
      Password<input type="text" ref={password} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Useref;
