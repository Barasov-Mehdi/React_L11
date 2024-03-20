import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Content from './component/Content.jsx'
import NavB from './component_1/Navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Content/>
    <NavB/>
  </React.StrictMode>,
)
