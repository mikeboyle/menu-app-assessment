import './App.css';
import MenuList from './components/MenuList/MenuList';

import {useEffect, useState} from 'react'




function App() {
const API_URL = "https://px32id5fdg.execute-api.us-east-1.amazonaws.com/data"


const [fullMenu, setFullMenu] = useState([])

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(`${API_URL}`);
        console.log(response)
        const data = await response.json();
        console.log(data)
        setFullMenu(data);
    }

    fetchData();
    // {console.log(fullMenu)}

    },[])


  return (
    <div className="App">
    
    <MenuList fullMenu={fullMenu}/>
    
    </div>
  ) 
  
}

export default App;
