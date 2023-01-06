import React from 'react'
import '../styles/Register.css'
import Right from './Right'
import { useState } from 'react'

const Register = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    repeatPassword: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [click, handleClick] = useState(false);


  const handleFullNameInputChange = (event) => {
    setValues({...values, fullName: event.target.value});
  };
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value});
  };
  const handlePasswordInputChange = (event) => {
    setValues({...values, password: event.target.value});
  };
  const handleRepeatPasswordInputChange = (event) => {
    setValues({...values, repeatPassword: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.fullName && values.email && values.password && values.repeatPassword && click) {
      setValid(true);
    }
    if (values.password === values.repeatPassword) {
      setSubmitted(true);
    }
  }
  return (
    <div className='parent'>
        <Right />
        <div className='form-container'>
          {submitted && valid ? <div className='message'>Success! Thank you for registering</div> : !submitted && valid ?  <div className='message'>Password and Confirm Password does not match.</div> : null}
        <h1>Welcome to <u>NFT</u> marketplace</h1>
        <form onSubmit={handleSubmit}>
            <p>Create your account</p>
            <label for="Full Name"><b>Full Name</b></label>
            <input onChange={handleFullNameInputChange} value={values.fullName} type="text" placeholder="Enter Full Name" name="full name" id="full name" required />
            {submitted && !values.fullName ? <span><br/>please enter a full name</span> : null}

            <label for="email"><b>Email</b></label>
            <input onChange={handleEmailInputChange} value={values.email} type="text" placeholder="Enter Email" name="email" id="email" required />
            {submitted && !values.email ? <span><br/>please enter an email</span> : null}

            <label for="psw"><b>Password</b></label>
            <input onChange={handlePasswordInputChange} value={values.password} type="password" placeholder="Enter Password" name="psw" id="psw" required />
            {submitted && !values.password ? <span><br/>please enter password</span> : null}

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input onChange={handleRepeatPasswordInputChange} value={values.repeatPassword} type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
            {submitted && !values.repeatPassword ? <span><br/>repeat password incorrect or empty</span> : null}
            
            <p><i onClick={() => {handleClick(!click)}} className={click ? "fa-regular fa-square-check" : "fa-regular fa-square"}></i> I agree <a href='_blank'> terms & conditions</a></p>
            <button type="submit" class="registerbtn">Create an account</button>

            
                
            <div class="sign-in">
                <p>Already have an account? <a href="_blank">Sign in</a>.</p>
            </div>
        </form>
        </div>
    </div>
    
  )
}

export default Register
