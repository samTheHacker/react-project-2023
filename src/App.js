import './App.css';
import  {useState, useEffect} from "react";

function App() {
  const [emotion, setEmotion] = useState("happy"); 

  useEffect (() => {
    console.log(`My emotion is ${emotion}`)
  }, [emotion])
  return (
    <div className="App">
      <h1> Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>
        sad
      </button>
      <button onClick={() => setEmotion("mad")}>
        mad
      </button>
    </div>
  );
}

export default App;
