import Header from "./Comp/Profile/Header";
import './App.css'
function App() {
  return (
   <>
  
  <Header/>

  <div id="menu" className="fas fa-bars"></div>

   </>
  );
}
export default App;

var mymenu = document.getElementById("menu");
var myheader = document.querySelector(".myheader") 

mymenu.addEventListener("click", ()=>{
mymenu.classList.toggle("fa-times");
myheader.classList.toggle("left");

});