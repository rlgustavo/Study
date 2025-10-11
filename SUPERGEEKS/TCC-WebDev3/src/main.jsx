import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Pedido from './Paginas/pedido';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
        <Route path='/home' element={ <App />  }   />
        <Route path='/' element={ <Pedido />  }   />

    </Routes>
  </Router>
)