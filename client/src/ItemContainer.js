import ItemCard from './ItemCard'


function ItemContainer({items}) {

    return (
        <div className="itemContainer">
             {items.map(item => <ItemCard key={item.id} item={item}  />)}
        </div>
    );
  }
  
export default ItemContainer