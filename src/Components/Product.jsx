import { IoAddCircleOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { addToBag, removeFromBag } from "../Store/BagSlice";

let Product=({item})=>{

    let bagItems=useSelector((state)=>state.bag)
    let dispatch=useDispatch()
    let elementFound=bagItems.indexOf(item.id) >=0
   
    let handleAddButton=()=>{
            dispatch(addToBag(item.id))
    }
    let handleRemoveButton=()=>{

        dispatch(removeFromBag(item.id))
    }
    return(
         <div class="item-container">
      <img class="item-image" src={item.image} alt="item image"/>
      <div class="rating">
         {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div class="company-name">{item.company}</div>
      <div class="item-name">{item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs {item.current_price}</span>
          <span class="original-price">Rs {item.original_price}</span>
          <span class="discount">({item.discount_percentage}OFF)</span>
      </div>
      {elementFound?<button type="button" class="btn-add-bag btn btn-danger" onClick={handleRemoveButton}><RiDeleteBin6Line />
 Remove</button>
      :
      <button type="button"  class="btn-add-bag btn btn-success" onClick={handleAddButton}><IoAddCircleOutline />Add To Cart</button>
    
    }
     
     
    </div>
    )
}
export default Product;