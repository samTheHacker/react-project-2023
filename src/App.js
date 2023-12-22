import './App.css';
import  {useState} from "react";

function App() {
const [title, setTitle] = useState("");
const [colour, setColour] =  useState("#000000");

const submit = (e) => {
  e.preventDefault();
  alert(`${title}, ${colour}`);
  setTitle("");
  setColour("");

};

  return (
    <form onSubmit={submit}>
      <input 
        value={title}
        onChange={(event) => setTitle(event.target.value)} 
        type="text" 
        placeholder="colour title..."
      />
      <input 
        value={colour} 
        type="color" 
        onChange={(event) => 
        setColour(event.target.value)
      }
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
