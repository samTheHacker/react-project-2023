import './App.css';
import  {useState, useEffect} from "react";

function App() {
  const [emotion, setEmotion] = useState("happy"); 
  const [secoundary, setSecoundary] = useState("tired"); 

  useEffect (() => {
    console.log(`My emotion is ${emotion}`)
  }, [emotion])

  useEffect (() => {
    console.log(`My secoundary emotion is ${secoundary}`)
  }, [secoundary])

  return (
    <div className="App">
      <h1> Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>
        sad
      </button>
      <button onClick={() => setEmotion("mad")}>
        mad
      </button>
      <h2> My secoundary emotion is {secoundary}</h2>
      <button onClick={() => setSecoundary("glad")}>
        glad
      </button>
    </div>
  );
}

export default App;
