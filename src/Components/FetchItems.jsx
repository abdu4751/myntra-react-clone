import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {addinitialItems} from '../Store/ItemSlice'
import {markFetchDone, markFetchingFinished, markFetchingStarted} from '../Store/FetchStatus'
let FetchItems=()=>{
const fetchingStatus=useSelector((store)=>store.fetchStatus)
let dispatch=useDispatch()
console.log(fetchingStatus)
useEffect(() => {
  const controller = new AbortController();
    if(fetchingStatus.fetchDone)return
     dispatch(markFetchingStarted())
     console.log("fetching Start")
  fetch("http://localhost:8080/items", { signal: controller.signal })
    .then((res) => res.json())
    .then(({items}) => {
        dispatch(markFetchDone())
        dispatch(addinitialItems(items[0]))
        dispatch(markFetchingFinished())
    
    })
   

  return () => {
    console.log("Cleaning up UseEffect.");
    controller.abort();
  };
}, []);

return(
    <>
    </>
)

}
export default FetchItems