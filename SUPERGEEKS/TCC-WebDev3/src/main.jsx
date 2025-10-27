import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Desafio from './Paginas/Desafio';
import Pedido from './Paginas/Pedido';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
        <Route path='/' element={ <Pedido />  }   />
        <Route path='/home' element={ <App />  }   />
        <Route path='/desafio' element={ <Desafio />  }   />

    </Routes>
  </Router>
)