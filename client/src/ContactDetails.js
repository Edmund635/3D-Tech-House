import  {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Contact from './Contact';
import {useHistory} from 'react-router-dom';




function ContactDetails({currentUser}) {
    const [ContactInfo, setContactInfo] = useState([]);
    const [errors, setErrors] = useState(false)
    const history = useHistory();

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

console.log(ContactInfo)
  return (
    <div className="card">
            {ContactInfo? <p>Last Name: {ContactInfo.last_name}</p> : null}
            {ContactInfo? <p>First Name: {ContactInfo.first_name}</p> : null}
            {ContactInfo? <p>Email: {ContactInfo.email}</p> : null}
            {ContactInfo? <p>Address: {ContactInfo.address}</p> : null}
            {ContactInfo? <p>Phone Number: {ContactInfo.phone_number}</p> : null}
            {ContactInfo? null : <Contact currentUser={currentUser}/>}
            {ContactInfo? <button class='update' onClick={handleLink}>Update Contact</button> : null}
    </div>
  )
}

export default ContactDetails
