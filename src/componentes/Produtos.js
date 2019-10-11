import React, { useState } from "react";
import '../componentes/Produtos.scss';
// import  '../Cardapio.js';

const Produtos = ({ comidas }) => {
    const [votos, setVotos] = useState(0);

    const incrementar = () => {
        setVotos(votos + 1);
    }

    const decrementar = () => {
        if (votos > 0) {
            setVotos(votos - 1);
        }   
    }
    
    return (
        <div className="Produtos">
            <h1>{comidas}</h1>
        <div>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
        </div>
        </div>
    )
    }


export default Produtos;