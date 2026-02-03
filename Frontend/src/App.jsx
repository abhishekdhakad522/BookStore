
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Course } from './components/Course'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import Courses from './courses/Courses'
import { Home } from './home/Home'
import { Route, Routes } from "react-router"
import  { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/course'  element ={<Courses/>}/>
        <Route path='/contact'  element ={<Contact/>}/>
        <Route path='/about'  element ={<About/>}/>
        <Route path='/signup' element= {<Signup/>}/>
      </Routes>
      <Toaster />
    </div>
    
    </>
  )
}

export default App