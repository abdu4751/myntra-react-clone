import { useSelector } from "react-redux";
const BagSummary = () => {


 const bagItemIds=useSelector(state=>state.bag)
const totalItem=bagItemIds.length
let  totalMRP=0
let  totalDiscount=0
const ConvenienceFes=99


const items=useSelector((state)=>state.items)
   const finalItems=items.filter(item=>{
    const itemIndex=bagItemIds.indexOf(item.id)
    return itemIndex>=0
   })
finalItems.forEach((bagItem) => {
totalMRP += bagItem.original_price;
totalDiscount += bagItem.original_price-bagItem.current_price;
});

let finalPayment = totalMRP -totalDiscount + ConvenienceFes;
  return (
    <div className="bag-summary"> 
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS {totalItem} Items</div>
        
        <div className="price-item">
          <span className="price-item-tag">Original Price</span>
          <span className="price-item-value">Rs.{totalMRP}</span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Discount</span>
          <span className="price-item-value priceDetail-base-discount">Rs.{totalDiscount}</span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Delivery Charges</span>
          <span className="price-item-value">{ConvenienceFes}</span>
        </div>

        <hr/>

        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">Rs.{finalPayment}</span>
        </div>
      </div>

      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
