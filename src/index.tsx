import App from './App'
import './scss/main.scss'

import { createRoot } from 'react-dom/client'
const container = document.getElementById('app')
const root = createRoot(container!)
root.render(<App />)
