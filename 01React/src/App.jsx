import Card from "./components/card"
import Nav from "./components/nav"

function App(){
  return(
     <div className="parent" >
   <Card user='Ankur Singh'age={21}/>
   <Card user='Ritik Singh' age={20}/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   </div>

   
  ) 

}
export default App