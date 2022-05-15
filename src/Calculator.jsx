import React, {useState} from "react";

const Calculator = (props) => {
    const {mathsymbol} = props;
    const [symb, setSymb] = React.useState(0);
    const handlesymb = () => {
        setSymb(mathsymbol);
    };
    return (
        <div>
            <p> The curr symbol is: {symb}</p>
            <button onClick={handlesymb}> {mathsymbol} </button>
        </div>
        
    );
};

export default Calculator;