import React from 'react';
import Header from './Components/Header';
import Carrousel from './Components/Carrousel';
import Contador from './Components/Contador';
import Texto from './Components/Texto';
import Footer from './Components/Footer';
import PlayerMusic from './Components/PlayerMusic';

function App() {
    return (
        <>
            <PlayerMusic />
            < Header />
            < Carrousel />
            < Contador />
            < Texto />
            < Footer />
        </>
    )
}

export default App;