import DanielCard from "./DanielCard"
import FelipeCard from "./FelipeCard"

function App() {
  
  return (
  <div className="app">
      <h1>Taller DevOps - Integración de Componentes</h1>
      <div className="componentes-container">
        <DanielCard/>
        <FelipeCard/>
      </div>
  </div>
  )
}

export default App
