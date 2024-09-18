import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import ErrorPage from './components/Error/ErrorPage.jsx'
import Admin from './pages/Admin/Admin.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/admin",
    element: <Admin/>,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <RouterProvider router={router} />
   
  </React.StrictMode>,
)
