import { useSelector } from "react-redux"
import AddToCartItems from "../Components/AddToCartItems"
import BagSummary from "../Components/BagSummary"

let ItemBags=()=>{
   const bagItems=useSelector(state=>state.bag)
   const items=useSelector((state)=>state.items)
   const finalItems=items.filter(item=>{
    const itemIndex=bagItems.indexOf(item.id)
    return itemIndex>=0
   })
   
    return(
        <>
              
            <main>
                <div className="bag-page">
                    <div className="bag-item-container">

                        {finalItems.map(item=> <AddToCartItems item={item}></AddToCartItems>)}
                       
                        </div> 
                    <BagSummary></BagSummary>
                               
                </div>
            </main>
                
            </>
    )
}

export default ItemBags;