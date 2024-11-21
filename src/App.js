import { useState } from 'react';
import './App.css';
import data from "./data"
import Tour from './Component/Tour';

function App() {
  const [state, setState] = useState(data)


  function Remove(id) {
    const remove = state.filter((items) =>
      items.id !== id
    )
    setState(remove)
  }

  if (state.length === 0) {
    return (<div style={{ display: "flex", flexDirection: "column", alignItems: "centter", alignSelf: "center", justifyContent: "center", margin: "auto", width: "400px" }}>
      <h1>Oops! Sorry Nothing left</h1>
      <button style={{ backgroundColor: "blueviolet", border: "none", color: "white", padding: "10px", borderRadius: "5px" }} onClick={() => {
        setState(data)
      }}>reset data</button>
    </div>
    )
  }

  return (

    <div className="App">

      <Tour state={state} remove={Remove} />
    </div>
  );




}

export default App;
