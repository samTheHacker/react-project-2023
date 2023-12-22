import './App.css';
import  {useState} from "react";

function useInput(initalValue){
  const [value, setValue] = useState(initalValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initalValue)
  ];
}

function App() {
const [titleProps, resetTitle] = useInput("");
const [colourProps, resetColour] =  useInput("#000000");

const submit = (e) => {
  e.preventDefault();
  alert(`${titleProps.value}, ${colourProps.value}`);
  resetTitle();
  resetColour();

};

  return (
    <form onSubmit={submit}>
      <input 
        {...titleProps}
        type="text" 
        placeholder="colour title..."
      />
      <input 
        type="color" 
        {...colourProps}
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
