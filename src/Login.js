import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom';
import {auth} from './Firebase.js'

function Login() {
    const history= useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const login =e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/')
        })
        .catch((err)=> alert(err.message))
    }
    const register=e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/')
        })
        .catch((err)=> alert(err.message))
    }
    return (
        <div className="login">
              <Link to ="/">
                 <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" /> </Link>
   
          <div className="login_container">
              <h1>Sign In</h1>
              <form>
                  <h5>Email</h5>
                  <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                  <h5>Password</h5>
                  <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                  <button  onClick={login}>Sign In</button>
              </form>
              <h5>Don't have an account ?</h5> 
              <button className="create-account" onClick={register}>Create Your Account</button>
          </div>

                
          
        </div>
    )
}

export default Login
