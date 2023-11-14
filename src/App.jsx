import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Alert from './components/layout/Alert'
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from './Context/Github/GithubContext';
import { AlertProvider } from './Context/alert/AlertContext';
import User from './pages/User'
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <BrowserRouter>
     <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className='container px-3 pb-12 mx-auto'>
        <Alert />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/user/:username' element={<User />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
     </div>
    </BrowserRouter>
    </AlertProvider>
    </GithubProvider>
  )
}

export default App
