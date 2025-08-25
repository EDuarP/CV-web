import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home.jsx'
import Cv from './cv.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cv />
  </StrictMode>,
)
