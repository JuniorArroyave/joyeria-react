import { Navbar } from "../components/elements/nav/NavBar"
import { Home } from "../components/Pages/Home/Home.jsx"
import "./css/app.css"

function App() {

  return (
    <>
    <div className="contentapp">
      
    <header className="headerApp">
      <Navbar/>
    </header>

    <main className="mainApp">

      <div className="mainContent">
          <Home/>
      </div>


    </main>

    </div>
    </>
  )
}

export default App
