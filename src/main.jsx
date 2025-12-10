import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Routes/App.jsx'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import ItemBags from './Routes/ItemBags.jsx'
import HomePage from './Routes/HomePage.jsx'
import {Provider} from 'react-redux'
import store from './Store/ReduxStore.jsx'
const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
      {path:"/",element:<HomePage/>},
      {path:"/bag",element:<ItemBags></ItemBags>}
  ]
}])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
  </StrictMode>
)
