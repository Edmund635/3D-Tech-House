import  {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Contact from './Contact';
import {useHistory, useParams} from 'react-router-dom';




function ContactDetails({currentUser}) {
    const [ContactInfo, setContactInfo] = useState([]);
    const [errors, setErrors] = useState(false)
    const history = useHistory();
    const {id} = useParams()


  useEffect(() => {
    fetchContact()
  },[])

  const fetchContact = () => {
    fetch('/me')
    .then(res => {
      if(res.ok){
        res.json().then(data => setContactInfo(data.contact))
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  function handleLink(){
    history.push(`/${currentUser.id}/contact/new`);
  }

  if(errors) return <h1>{errors}</h1>
  const deleteContact = (id) => setContactInfo(current => current.filter(p => p.id !== id)) 


    function handleDelete(){
      fetch(`/contacts/${id}`,{
        method:'DELETE',
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => {
        if(res.ok){
          deleteContact(id)
          history.push(`/users/${currentUser.id}`)
        } else {
          res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
      })
    }


console.log(ContactInfo)
  return (
    <div className="card">
            <div class = "card-h2">
            <h1><b>Contact Information</b></h1></div>
            <br></br>
            {ContactInfo? <p>Last Name: {ContactInfo.last_name}</p> : null}
            {ContactInfo? <p>First Name: {ContactInfo.first_name}</p> : null}
            {ContactInfo? <p>Email: {ContactInfo.email}</p> : null}
            {ContactInfo? <p>Shipping Address: {ContactInfo.address}</p> : null}
            {ContactInfo? <p>Phone Number: {ContactInfo.phone_number}</p> : null}
            {ContactInfo? null : <Contact currentUser={currentUser}/>}
            {ContactInfo? <div class = 'update'><button class='update' onClick={handleLink}>Update Contact</button></div> : null}
            <br></br>
            {ContactInfo? <div class = 'update'><button onClick={handleDelete}>Delete Contact!</button></div> : null}

    </div>
  )
}

export default ContactDetails
