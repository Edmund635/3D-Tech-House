import './App.css';
import { Route, Switch } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Home from './Home'
import UserPage from './UserPage';
import SignUp from './SignUp';
import Login from './Login'
import Navigation from './Navigation'
import ItemDetails from './ItemDetails';
// import Contact from './Contact';
// import EditContact from './EditContact';


function App() {
  const [items, setItems] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetchItems()
  },[])

  const fetchItems = () => {
    fetch('/items')
    .then(res => {
      if(res.ok){
        res.json().then(itemData => setItems(itemData))
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }


  const updateUser = (user) => setCurrentUser(user)
  if(errors) return <h1>{errors}</h1>


  return (
    <>
      <Navigation updateUser={updateUser} currentUser={currentUser}/>
      <Switch>
      <Route exact path='/users/new'>
        <SignUp updateUser={updateUser}/>
      </Route>

      <Route path='/users/:id'>
        <UserPage updateUser={updateUser}/>
      </Route>

      <Route path='/login'>
        <Login updateUser={updateUser}/>
      </Route>

      <Route exact path='/'>
        <Home items={items}/>
      </Route>

      <Route exact path="/items/:id">
        <ItemDetails />
      </Route>
      {/* <Route exact path="/contact/new">
        <Contact currentUser={currentUser}/>
      </Route>

      <Route exact path="/:id/contact">
        <EditContact currentUser={currentUser}/>
      </Route> */}
      </Switch>
    </>
  )
}

export default App
