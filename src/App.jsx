import About from "./About"
import Home from "./Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import PNF from "./PNF"
import Navbar from "./components/Navbar"
import Viewdetails from "./Viewdetails"
import Learnuseffect from "./Learnuseffect"
import Cart from "./Cart"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

function App() {
  const [arr, setarr] = useState([]);
  console.log(arr)

  function recievefromchild(ans){

    console.log(ans)
    ans.quantity=1

    let copyarr=[...arr]
    let find=arr.find ((ele)=>ele.id ===ans.id)
    if (find){
      return toast.warning('item already added')
    }
else{
  copyarr.push(ans)
  toast.success('item added succesfully',{position:'top-center'})
  setarr(copyarr)
}
    
  }

  return (
    <>
    
    <BrowserRouter>
    <div className="h-[70px]">
    <Navbar arr={arr}/>
    </div>

    <Routes>
      <Route path="/" element={<Home recievefromchild={recievefromchild }/>} />
      <Route path="/xyz" element={<About/>}/>
      <Route path="/learn" element={<Learnuseffect/>}/>
      <Route path="/view" element={<Viewdetails/>}/>
      <Route path="/cart" element={<Cart arr={arr} setarr={setarr}/>}/>
      <Route path="/*" element={<PNF/>}/>
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
    
   
    </>
  )
}

export default App
