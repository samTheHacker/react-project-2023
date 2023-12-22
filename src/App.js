import './App.css';
import  {useRef} from "react";

function App() {
const textTitle = useRef();
const hexColour = useRef();

const submit = (e) => {
  e.preventDefault();
  const title = textTitle.current.value;
  const colour = hexColour.current.value;

  alert(`${title}, ${colour}`);
  textTitle.current.value = "";
  hexColour.current.value = "";
};

  return (
    <form onSubmit={submit}>
      <input 
      ref={textTitle} 
      type="text" 
      placeholder="colour title..."
      />
      <input ref={hexColour} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;
