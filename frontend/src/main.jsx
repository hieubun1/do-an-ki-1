import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Route } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import App from './App'
import router from './routers/router'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
