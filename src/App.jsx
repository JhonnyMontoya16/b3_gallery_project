import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Foto1 } from './componentes/foto1'
import { Foto2 } from './componentes/foto2'
import { Foto3 } from './componentes/foto3'
import { Foto4 } from './componentes/foto4'
import { Foto5 } from './componentes/foto5'
import { Foto6 } from './componentes/foto6'
import { Navigation } from './componentes/Navigation';

function App() {

  return (
    <>
    <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/foto1' element={<Foto1 className='main-img-container'/>} />
            <Route path='/foto2' element={<Foto2 className='main-img-container'/>} />
            <Route path='/foto3' element={<Foto3 className='main-img-container'/>} />
            <Route path='/foto4' element={<Foto4 className='main-img-container'/>} />
            <Route path='/foto5' element={<Foto5 className='main-img-container'/>} />
            <Route path='/foto6' element={<Foto6 className='main-img-container'/>} />
          </Routes>
        </div>
        <div className='container'>
            <Navigation />
        </div>
    </BrowserRouter>
    </>
  )
}

export default App
