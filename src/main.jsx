import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Route } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import App from './App'
import router from './routers/router'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import 'sweetalert2/dist/sweetalert2.js'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider >,
)
