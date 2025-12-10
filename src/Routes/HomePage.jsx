import { useSelector } from 'react-redux';
import Product from '../Components/Product'
import ToggleBar from '../Components/ToggleBar';


let HomePage=()=>{
    const displayItems=useSelector((store)=>store.items)
   
    return(
       <main>
         
        <div className="items-container">
          
            {displayItems.map((product,index)=><Product key={index} item={product}/>)}
          
         
        </div>
    </main>
    )
}

export default HomePage;