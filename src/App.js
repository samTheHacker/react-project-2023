import './App.css';

const [firstCity] = ["Belfast", "Dublin", "Galway"]; //deconstruct a array/object

console.log(firstCity);

function App({library}) {
  return (
    <div className="App">
      <h1>Hello From {library}</h1>
    </div>
  );
}

export default App;
