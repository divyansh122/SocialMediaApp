import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from "./components/Sidebar"
import Creatpost from "./components/Createpost"
import Postlist from "./components/Postlist"
import { useState } from "react"
import Postliststore from "./store/postliststore"
function App() {

  const[selectedtab,setselectedtab]=useState("home")
  return (
    <Postliststore>
    <div id="app-container">
      <Sidebar selectedtab={selectedtab} setSelectedtab={setselectedtab} ></Sidebar>
      <div id="content-container">
    <Header/>
    {selectedtab==="home" ? <Postlist/> :<Creatpost/>}
     <Footer/>
     </div>
    </div>
    </Postliststore>
  )
}

export default App
