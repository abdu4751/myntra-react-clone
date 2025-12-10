
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import FetchItems from '../Components/FetchItems'
import LoadingSpinner from '../Components/LoadingSpinner';
import { useSelector } from 'react-redux';

import ToggleBar from '../Components/ToggleBar';
import { useState } from 'react';



function App() {
  const fetchingStatus=useSelector((store)=>store.fetchStatus)
    let [sideBar,setSideBar]=useState(false)
    let handleSideBar=()=>{
      console.log("abdullah")
      setSideBar(!sideBar)
    }
  return (
    <>
  
     <ToggleBar sideBar={sideBar} ></ToggleBar>
      <Header handleSideBar={handleSideBar} ></Header>
       
      <FetchItems></FetchItems>
      {fetchingStatus.currentylFetching?<LoadingSpinner></LoadingSpinner>: <Outlet></Outlet>}
         
        <Footer></Footer>
    </>
  )
}

export default App
