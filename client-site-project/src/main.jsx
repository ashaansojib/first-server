import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Phones from './components/phones'
import Phone from './components/phone'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/phones',
        element: <Phones></Phones>,
        loader: ()=> fetch('http://localhost:3399/jobs')
      },
      {
        path: '/phone/:id',
        element: <Phone></Phone>,
        loader: ({params})=> fetch(`http://localhost:3399/job/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
