import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function UserPage({updateUser}){
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    const params = useParams()
    const {id} = params

    useEffect(()=>{
        fetch(`/me`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)
                    updateUser(user)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
       
    },[])

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    return (
        <div>
            <h2>Welcome To Macana MFG <br></br> {user.username}</h2>
            <h3>Recent Orders</h3>
            <ul>
                {user.items.map(item => (
                <li>
                    <h2>{item.name}</h2>
                    <p>Price: $$ {item.price}</p>
                    <img src={item.image} alt={item.name} />
                </li>
                ))}
            </ul>
        </div>
    )
}

export default UserPage