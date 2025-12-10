
let ToggleBar=({sideBar})=>{
   
    return(
        <>
          <div className={`togglbar ${sideBar?"sidbarOpen":"sidebarClose"}`}>
           <div className="toggle-nav_bar">
                <li> <a href="#">Men</a></li>
                <li> <a href="#">Women</a></li>
                <li><a href="#">Kids</a></li>
                <li> <a href="#">Home & Living</a></li>
                <li> <a href="#">Beauty</a></li>
                <li> <a href="#">Studio <sup>New</sup></a></li>
           </div>
        </div>
       <div>
       </div>
       </>
    )
}
export default ToggleBar
