import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../Styles/App.css'
import App from '../Components/App.jsx'
// In main.js
import 'modern-normalize/modern-normalize.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
