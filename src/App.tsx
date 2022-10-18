import React  from "react"
import ReactDOM from "react-dom"
import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap";
import {Home} from "./Pages/Home"
import {About} from "./Pages/About"
import {Store} from "./Pages/Store"
import {Navbar} from "./Components/Navbar"
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";

function App() {
  return( 
    <>
    <ShoppingCartProvider>
      <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/store" element={<Store />}/>
      </Routes>
    </Container>
    </ShoppingCartProvider>
  </>
  )
}

export default App
