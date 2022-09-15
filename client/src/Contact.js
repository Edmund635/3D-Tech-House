import React, { useState} from 'react'
import {useHistory, Link} from 'react-router-dom';


function Contact({currentUser}) {
  const [formData, setFormData] = useState({
    last_name:'',
    first_name:'',
    email:'',
    phone_number:'',
    address: '',
    customer_id: currentUser.id
  })
  const [errors, setErrors] = useState([])
  const [ContactInfo, setContactInfo] = useState([]);
  const history = useHistory();


  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const addContactInfo = (contact_info) => setContactInfo(current => 
    [...current,contact_info]
)


  function onSubmit(e){
    e.preventDefault()
    
    fetch('/contacts',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({...formData, ongoing:true})
    })
    .then(res => {
      if(res.ok){
        res.json().then((newinfo) => {addContactInfo(newinfo)
        history.push(`/users/${currentUser.id}`)
    });
      } else {
        //Display errors
        res.json().then(data => setErrors(Object.entries(data.errors))
        )}
    })
    }

    
    return (
      <div className='container'>
      {/* {errors ? <div>errors</div> : null} */}
      <form onSubmit={onSubmit}>
        <label>Last Name </label>
        <input type='text' name='last_name' value={formData.last_name} onChange={handleChange} />
        
        <label> First Name</label>
        <input type='text' name='first_name' value={formData.first_name} onChange={handleChange} />
      
        <label>Shipping Address</label>
        <textarea type='text' name='address' value={formData.address} onChange={handleChange} />
      
        <label>Email</label>
        <input type='text' name='email' value={formData.email} onChange={handleChange} />
      
        <label>Phone Number</label>
        <input type='text' name='phone_number' value={formData.phone_number} onChange={handleChange} />
      
        <input class='submit'type='submit' value='Add Contact Information' />
      </form>
      <br></br>
      
      </div>
    )
    }
  export default Contact