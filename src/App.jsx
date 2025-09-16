import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import 'remixicon/fonts/remixicon.css'
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import 'remixicon/fonts/remixicon.css'
import Skills from "./pages/Skills"
import Achivment from "./pages/Achivment"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/skills" element={<Skills/>} />
        <Route path="/achievement" element={<Achivment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App