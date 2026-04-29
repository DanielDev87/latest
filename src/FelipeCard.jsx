import React from 'react'
import './FelipeCard.css'

const FelipeCard = () => {
  return (
    <div className="card daniel-card">
      <h2>Felipe Card</h2>
      <p>Componente desarrollado con DevOps</p>
      <button onClick={() => alert('Hola desde Felipe')}>Saludar</button>
    </div>
  )
}

export default FelipeCard