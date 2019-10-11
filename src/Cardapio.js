import React from "react";
import Produtos from "./componentes/Produtos.js";
import './Cardapio.scss';

const Cardapio = () => {
    return (
        <div className="Cardapio">
            <Produtos comidas="X-TUDO" />
            <Produtos comidas="X-BURGER" />
        </div>
    )
}

export default Cardapio;
