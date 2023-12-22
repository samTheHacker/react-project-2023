import './App.css';
import  {useState, useEffect} from "react";


function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/samTheHacker`)
    .then((response) => response.json())
    .then(setData);
  }, 
  [] //call rest API once
  ); 

  if(data)
    return ( <pre>{JSON.stringify(data, null, 2)}</pre>
    );
  return <h1>Data</h1>
}

export default App;
