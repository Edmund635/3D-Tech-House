import {Link} from 'react-router-dom'


function ItemCard({item}) {
    const {name, price, image, id} = item
    console.log(item)
    return (
      <div className='itemCard'>
        <Link to={`/items/${id}`}> <h2>{name}</h2></Link>
        <br></br>
      </div>

    );
  }
  
  export default ItemCard