import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Contact from "./Contact.jsx"
import Services from "./Services.jsx"
import Layout from "./Layout.jsx"
import NotFoud from "./NotFound.jsx"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFoud />}></Route>
        </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App
