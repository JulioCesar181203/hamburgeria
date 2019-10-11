import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss'

const Home = () => {
    return (
        <div className="Home">
            <div className="Imagem"></div>
                <div>
                    <Link to="/cadastro">
                        <button>Cadastrar</button>
                    </Link>
                </div>
        </div>
    )
}
export default Home;

