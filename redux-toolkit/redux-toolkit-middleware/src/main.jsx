import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from "./store/store.js"
import Cart from './pages/Cart'
import Home from './pages/Home'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <RouterProvider router={appRoutes} />
    </Provider>
  </StrictMode>,
)
