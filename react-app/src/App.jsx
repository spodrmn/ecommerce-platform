import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Grid from './components/Grid'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
        <div>
          <NavBar />
          <Hero />
              <h1 style ={{
                paddingTop: "50px", textAlign: "left",
                paddingLeft: "50px",
                paddingBottom: "30px"
                }}> 
                Products: 
                </h1>
          <Grid/>
        </div>
    </BrowserRouter>
  )
}

export default App