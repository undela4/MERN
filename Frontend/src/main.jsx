import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Context } from '../usecontext.jsx'
import { Context_1 } from '../usecontext1.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Context>
      <Context_1>
      <App />
      </Context_1>
      
    </Context>
  </BrowserRouter>,
)
