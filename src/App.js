import './App.css';
import {useEffect, useState} from 'react';
import MenuList from './components/MenuList';


function App() {
  const [menuData, setMenuData] = useState([]);


  useEffect(()=>{
    fetch(
      "https://px32id5fdg.execute-api.us-east-1.amazonaws.com/data"
    )
    .then((response) => response.json())
    .then((data) => setMenuData(data))
  }, [])


  return (
  <div className="App">
    <MenuList menuData={menuData} />
    </div>
  )}

export default App;
