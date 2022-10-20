// import { useState } from 'react'
import Navbar from './modules/Navbar'
import './global.css';


function App() {

  return (
    <div className="flex flex-col">
      {/* <div>
        <a href="/" target="_blank">
          <img src="pokedexlogo.png" className="logo" alt="Vite logo" />
        </a>
      </div> */}
      <div className='flex justify-center items center w-full bg-gray-900'>
        <h1 className=' text-slate-300 text-sm'>Pokédex by <strong>César Domingos</strong></h1>
      </div>
      <Navbar />
    </div>
  )
}

export default App
