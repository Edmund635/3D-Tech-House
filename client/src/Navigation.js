import { NavLink } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import MacanaLogo from './MacanaLogo.jpeg'



function Navigation({ updateUser, currentUser }) {
  const history = useHistory()


  const handleLogOut = () => {
    fetch('/logout',{
      method:'DELETE'  
    })
    updateUser(false);
    history.push("/");
  };

  return (
      <header className="headerbackground">
        <nav>
        <div className="navbar">
        <NavLink exact className="Home" to="/">
            <div>
                <h2>Macana Manufacturing</h2>
                {/* <img src={MacanaLogo} alt="MacanaLogo" style={{width:80, height: 'auto'}} /> */}
            </div>
        </NavLink>

            {currentUser ? <NavLink exact className = "button" to={`/users/${currentUser.id}`}>Account</NavLink> : null }
            <NavLink exact className="button" to="/">
              Inventory
            </NavLink>
            {currentUser ? null : <NavLink exact className="button" to="/users/new"> 
              SignUp
            </NavLink> }
            {currentUser ? null : <NavLink exact className="button" to="/login">
              Login
            </NavLink> }
            {currentUser ? <NavLink exact className="button" to= {`/${currentUser.id}/contact`}> Contact </NavLink> : null }
            {currentUser ? <button onClick={handleLogOut}>Log Out</button> : null}
          </div>
        </nav>
      </header>
  );
}

export default Navigation;