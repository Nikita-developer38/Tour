import { useState } from 'react';
import './App.css';
import data from "./data"
import Tour from './Component/Tour';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forms from "./Component/Forms.jsx"

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
    <BrowserRouter>

      <div className="App">


        <Routes>

          <Route path='/' element={<Tour state={state} remove={Remove} />} />
          <Route path="/form" element={<Forms />} />
        </Routes>

      </div>
    </BrowserRouter>

  );




}

export default App;
