import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
        <div>
          <NavBar />
          <Hero />
        </div>
    </BrowserRouter>
  )
}

export default App