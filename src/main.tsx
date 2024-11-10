import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'  
import './index.css'
import App from './components/app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
