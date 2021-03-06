import React, {useState} from "react";
import './App.css';
/*const symbols = [
    "+", "-", "x", "/", "%",
    "^", "1", "2", "3", "4",
    "5", "6", "7", "8" ,"9", 
    "0","clr", "=", "(", ")", 
    ".","log", "tan","sin","cos"
];*/

const symbols = [
    "π",  "log", "(", ")", "exp", "clr",
    "e",  "sin", "1", "2",  "3", "x",
    "^",  "cos", "4", "5",  "6", "-", 
    "ln", "tan", "7", "8",  "9", "+", 
    "|x|",  "%"  , "/", "0",  ".", "="
];

const Calculator = () => {
    const [symb, setSymb] = React.useState(" ");
    const [equation, setEquation] = React.useState("");
    const [equationStr, setEquationStr] = React.useState("");
    const [comp, setComp] = React.useState(0);
    const [compString, setCompString] = React.useState("");
    const [equalFlag, setEqualflag] = React.useState(0);

    const resizeText = (element) => {
        var elements = document.getElementByclassName(element);
        var offsetWidth = document.getElementByclassName(element).offsetWidth;
        var i = 12;
        console.log("clientWidth is " + offsetWidth);
        while (offsetWidth > 10000) {
            elements.style.fontSize = i - 1;
        }
    }

    return (
        <div className="cal">
            <h2 id="calHeader"> {equationStr} &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {compString}</h2>
            <h3>  </h3>
            {/*<p> {symb} </p>*/}
            {/*<h2> Equation: {equation} </h2>*/}
            {/*<h2> {comp} </h2>*/}
            {/*<p> Equal Flag: {equalFlag} </p>*/}

            {/*resizeText("cal")*/}

            <div className = "wrapper">
                {symbols.map((symbol) => {
                const handleSymb = () => {
                // If Clear, then clear everything
                if (symbol === "clr") {
                    setSymb(0);
                    setEquation(0);
                    setComp(0);
                    setEqualflag(1);
                    setEquationStr(0);
                    setCompString("");
                }
                // If equal, then compute calcuation and curr equation
                else if (symbol === "=") {
                    setSymb(0);
                    setComp(eval(equation));
                    setEquation(equation + symbol);
                    setEquationStr(equationStr + symbol);
                    setCompString(eval(equation).toString());
                    setEqualflag(1);
                }
                // If the next sym is not a num and we just hit equal, then replace equation with the equated num plus non-int sym
                else if (isNaN(parseInt(symbol)) && equalFlag) {
                    if (symbol === "x") {
                        setSymb("*");
                        setEquation(comp + "*");
                        setEquationStr(comp + symbol);
                    }
                    else if (symbol === "exp") {
                        setSymb("exp");
                        setEquation(comp + "**");
                        setEquationStr(comp + symbol);
                    }
                    else if (symbol === "tan") {
                        setSymb("tan(");
                        setEquation(comp + "Math.tan(");
                        setEquationStr(comp + "tan(");
                    }
                    else if (symbol === "cos") {
                        setSymb("cos(");
                        setEquation(comp + "Math.cos(");
                        setEquationStr(comp + "cos(");
                    }
                    else if (symbol === "sin") {
                        setSymb("sin(");
                        setEquation(comp + "Math.sin(");
                        setEquationStr(comp + "sin(");
                    }
                    else if (symbol === "log") {
                        setSymb("log(");
                        setEquation(comp + "Math.log(");
                        setEquationStr(comp + "log(");
                    }
                    else if (symbol === "e") {
                        setSymb("e");
                        setEquation(comp + "Math.E");
                        setEquationStr(comp + "e");
                    }
                    else if (symbol === "|x|") {
                        setSymb("|x|");
                        setEquation(Math.abs(comp));
                        setEquationStr("|" + comp + "|");
                    }
                    else {
                        setSymb(symbol);
                        setEquation(comp + symbol);
                        setEquationStr(comp + symbol);
                    }
                    setEqualflag(0);
                    setComp(0);
                }
                // If the next sym is not a num and we didn't hit equal
                else if (isNaN(parseInt(symbol)) && !equalFlag) {
                    if (symbol === "x") {
                        setSymb("x");
                        setEquation(equation + "*");
                        setEquationStr(equationStr + symbol);
                    }
                    else if (symbol === "exp") {
                        setSymb("exp");
                        setEquation(equation + "**");
                        setEquationStr(equationStr + symbol);
                    }
                    else if (symbol === "tan") {
                        setSymb("tan(");
                        setEquation(equation + "Math.tan(");
                        setEquationStr(equationStr + "tan(");
                    }
                    else if (symbol === "cos") {
                        setSymb("cos(");
                        setEquation(equation + "Math.cos(");
                        setEquationStr(equationStr + "cos(");
                    }
                    else if (symbol === "sin") {
                        setSymb("sin(");
                        setEquation(equation + "Math.sin(");
                        setEquationStr(equationStr + "sin(");
                    }
                    else if (symbol === "log") {
                        setSymb("log(");
                        setEquation(equation + "Math.log(");
                        setEquationStr(equationStr + "log(");
                    }
                    else if (symbol === "e") {
                        setSymb("e");
                        setEquation(equation + "Math.E");
                        setEquationStr(equationStr + "e");
                    }
                    else if (symbol === "π") {
                        setSymb("π");
                        setEquation(equation + "Math.PI");
                        setEquationStr(equationStr + "π");
                    }
                    else if (symbol === "|x|") {
                        setSymb("|x|");
                        setEquation("|" + equation + "|");
                        setEquationStr("|" + equationStr + "|");
                    }
                    else {
                        setEquation(equation + symbol);
                        setSymb(symbol);
                        setEquationStr(equationStr + symbol);
                    }
                    setComp(0);
                }
                // If we just hit equal, then reset and replace equation with the new num
                else if (equalFlag) {
                    setEqualflag(0);
                    setEquation(symbol);
                    setEquationStr(symbol);
                    setSymb(symbol);
                    setCompString("");
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