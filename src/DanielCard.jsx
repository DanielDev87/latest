import React from 'react'
import './DanielCard.css'

const DanielCard = () => {
  return (
    <div className="card daniel-card">
      <h2>DanielDev 🥸</h2>
      <p>Componente desarrollado con DevOps</p>
      <button onClick={() => alert('Hola desde Daniel')}>Saludar</button>
    </div>
  )
}

export default DanielCard