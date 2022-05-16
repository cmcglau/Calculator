import React, {useState} from "react";
import './App.css';
const symbols = ["+","-","x","/","%","^", "1", "2", "3", "4",
"5", "6", "7", "8" ,"9", "0","clr", "=", "(", ")", "."];


const Calculator = () => {
    const [symb, setSymb] = React.useState(" ");
    const [equation, setEquation] = React.useState("");
    const [equationStr, setEquationStr] = React.useState("");
    const [comp, setComp] = React.useState(0);
    const [equalFlag, setEqualflag] = React.useState(0);
    
    return (
        <div>
            <h2> {equationStr} </h2>
            {/*<h2> Equation: {equation} </h2>*/}
            <h2> {comp} </h2>
            <p> {symb} </p>
            <p> Equal Flag: {equalFlag} </p>
            <div class = "wrapper">
                {symbols.map((symbol) => {
                const handleSymb = () => {
                // If Clear, then clear everything
                if (symbol == "clr") {
                    setSymb(0);
                    setEquation(0);
                    setComp(0);
                    setEqualflag(1);
                    setEquationStr(0);
                }
                // If equal, then compute calcuation and curr equation
                else if (symbol == "=") {
                    setSymb(0);
                    setComp(eval(equation));
                    setEquation(equation + symbol);
                    setEquationStr(equationStr + symbol);
                    setEqualflag(1);
                }
                // If the next sym is a num and we just hit equal, then reset and replace equation with the new num
                else if (!isNaN(parseInt(symbol)) && equalFlag) {
                    setEqualflag(0);
                    setEquation(symbol);
                    setEquationStr(symbol);
                    setSymb(symbol);
                    setComp(0);
                }
                // If the next sym is not a num and we just hit equal, then replace equation with the equated num plus non-int sym
                else if (isNaN(parseInt(symbol)) && equalFlag) {
                    if (symbol == "x") {
                        setSymb("*");
                        setEquation(comp + "*");
                    }
                    else if (symbol == "^") {
                        setSymb("^");
                        setEquation(comp + "**");
                    }
                    else {
                        setSymb(symbol);
                        setEquation(comp + symbol);
                    }
                    setEquationStr(comp + symbol);
                    setEqualflag(0);
                    setComp(0);
                }
                // If the next sym is not a num and we didn't hit equal
                else if (isNaN(parseInt(symbol)) && !equalFlag) {
                    if (symbol == "x") {
                        setSymb("x");
                        setEquation(equation + "*");
                    }
                    else if (symbol == "^") {
                        setSymb("^");
                        setEquation(equation + "**");
                    }
                    else {
                        setEquation(equation + symbol);
                        setSymb(symbol);
                    }
                    setEquationStr(equationStr + symbol);
                    setComp(0);
                }
                else {
                    setSymb(symbol);
                    setEquation(equation + symbol);
                    setEquationStr(equationStr + symbol);
                    setEqualflag(0);
                    setComp(0);
                }
                
                };
                return (
                    <button onClick={handleSymb} class="buttonStyle"> {symbol} </button>
                );
            })}
            </div>
        </div>
        
        
    );
};

export default Calculator;