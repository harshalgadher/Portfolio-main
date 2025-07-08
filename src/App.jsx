import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import 'remixicon/fonts/remixicon.css'
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App