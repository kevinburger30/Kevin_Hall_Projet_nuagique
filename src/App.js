import { Routes, Route } from 'react-router-dom'

import Connexion from './pages/Connexion'
import Produits from './pages/Produits';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Connexion/>}/>
        <Route path="/Produits" element={<Produits/>}/>
      </Routes>
    </>
  );
}

export default App;