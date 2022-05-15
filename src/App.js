import React, {useState} from 'react';
import './App.css';
import Calculator from './Calculator';

const symbols = ["+","-","*","/","%","^", "0", "1", "2", "3", "4",
"5", "6", "7", "8" ,"9", "clr"];

function App() {
  const [symb, setSymb] = React.useState(" ");
  return (
    <div className="App">
      <header className="App-header">
        <h3>My Calculator App</h3>
        <p> Current Symbol is: {symb} </p>
        {symbols.map((symbol) => {
          const handleSymb = () => {
            if (symbol == "clr") {
              setSymb(" ");
            }
            else {
              setSymb(symbol);
            }
            
          };
          return (
            <button onClick={handleSymb} class="buttonStyle"> {symbol} </button>
          );
        })}
      </header>
    </div>
  );
}

export default App;
