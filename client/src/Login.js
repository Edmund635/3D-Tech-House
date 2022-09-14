import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import {useHistory} from 'react-router-dom'

function Login({updateUser}) {
    const [formData, setFormData] = useState({
        username:'',
        password:'',
        admin_user_id: 1
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {username, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        // Logs in user
        fetch('/login',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    updateUser(user)
                    history.push(`/users/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
        <> 
        <br></br> 
        <br></br> 
        <div class="login">
        <h2 class="header-login">Login </h2>          
        <form onSubmit={onSubmit} id="login" > 
        <label class='label'><b>
          Username 
          </b></label>
        <input type='text' name='username' id= "Uname"value={username} onChange={handleChange} />
      
        <label class='label'><b>
         Password
         </b></label>
        <input type='password' name='password' id= "Pass" value={password} onChange={handleChange} />
        <br></br>
        <br></br>
        <input type='submit' name="log" id="log" value='Login' />
        <br></br>
        <br></br>
        <input type="checkbox" id="check" />    
        <span>Remember me</span>
        <br></br>
        <a class='a-tag' href="#">Forgot Password</a>
        <br></br>
        <br></br>
        <p class='label'> Not a user? <NavLink exact className="button" to="/users/new"> Register Now</NavLink> </p>
      </form>
      <br></br>
      {errors? <div class="errors"><b>{errors}</b></div>:null}
      </div>
        </>
    )
}

export default Login