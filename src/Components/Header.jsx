import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";

let Header=({handleSideBar})=>{

    let cartItems=useSelector((state)=>state.bag)
   
    return(
        <>
       <header>
       
         <div className="bar">
           
              <FaBars style={{ fontSize: "35px" }} onClick={handleSideBar} />
        </div>
       
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src="./images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
                  <IoPersonOutline />
                <span className="action_name">Profile</span>
                  

            </div>

            <div className="action_container">
                <CiHeart />
                <span className="material-symbols-outlined action_icon">favorite</span>
                

            </div>

            <Link className="action_container" to="/bag">
                <PiShoppingBagOpenBold />
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{cartItems.length}</span>
            </Link>
        </div>
    </header>
    <div>
           
    </div>
    </>
    )
}

export default Header;