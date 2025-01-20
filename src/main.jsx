import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from './components/Body.tsx'
import Contact from './components/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './components/Product.tsx'
import Cart from './components/Cart.tsx'


const appRounter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/product/:pdctId",
        element: <Product />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRounter} />
  </StrictMode>,
)
