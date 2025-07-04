import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, Outlet, HashRouter } from 'react-router'
import App from './App'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './assets/styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App><Outlet /></App>}>
          <Route index element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
