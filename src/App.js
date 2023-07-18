
import './App.css';
import {useState,useEffect} from "react"
function App() {


  const[data,setData]=useState({});
  
const getjoke=async()=>{
  
  const url=`https://v2.jokeapi.dev/joke/Any?flags=nsfw,relegious,political,sexist,explicit,racist&type=single`
  const res=await fetch(url);
  const resJson=await res.json();
  setData(resJson);

}
const handlesearch=()=>{
  getjoke();
}


useEffect(()=>{
  
},[])
 
  return (
    <div className="App">
      <div className="main">
        
        <div className="hello"><button className="submit" onClick={handlesearch}>Click for New Joke😂</button></div>
        <div className="heading1">{data.joke}</div>
        
        

      </div>
    </div>
  );
}

export default App;
