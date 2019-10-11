import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import Cadastro from './componentes/Cadastro/Cadastro';
import Produtos from './componentes/Produtos';
import Cardapio from './Cardapio';

const App = () => {
  return (
    <BrowserRouter>
    
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/produtos" component={Produtos} />
      <Route path="/cardapio" component={Cardapio} /> 
    </BrowserRouter>
  )
}
export default App;

