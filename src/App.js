import React from 'react';

import LineConversor from './components/LineConversor'

function App() {


  return (
    <div style={{maxWidth:"900px", margin: "auto"}}>
      <h1 style={{textAlign:"center"}}>Conversor de moedas</h1>
      <LineConversor moedaA={"USD"} moedaB={"BRL"}/>
      <LineConversor moedaA={"CAD"} moedaB={"BRL"}/>
      <LineConversor moedaA={"EUR"} moedaB={"BRL"}/>
    </div>
  );
}

export default App;
