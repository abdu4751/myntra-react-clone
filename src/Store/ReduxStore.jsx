import {configureStore} from "@reduxjs/toolkit"
import ItemSlice from './ItemSlice.jsx'
import fetchStatusSlice from './FetchStatus.jsx'
import bagSlice from './BagSlice.jsx'
const store=configureStore({
    reducer:{
        items:ItemSlice,
        fetchStatus:fetchStatusSlice,
        bag:bagSlice
    }
})

export default store