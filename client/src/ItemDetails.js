import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function CourseDetails() {
    const [item, setItem] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const [errors, setErrors] = useState(false)
    
    const { id } = useParams();

    useEffect(() => {
      fetch(`/items/${id}`)
        .then((res) =>{
            if(res.ok){
                res.json().then(itemData => {
                    setItem(itemData)
                    setIsLoaded(true)
                });
            }
            else {
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [id]);

    if (!isLoaded) return <h2>Loading...</h2>
    if(errors) return <h1>{errors}</h1>


    const { image, price, name  } = item
    return(
        <div class="itemDetails">
            <p>Item Name: {name}</p>
            <p>Item Price: {price}</p>
            <p><img src={image} alt={name} /></p>
        </div>
    );
}

export default CourseDetails;