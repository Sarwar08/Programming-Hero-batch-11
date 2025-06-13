import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router'
import MainLayouts from './layouts/MainLayouts.jsx'
import UpdateUser from './components/UpdateUser.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayouts,
    children: [
      {
        index: true, Component: App,
      },
      {
        path: '/update/:id',
        Component: UpdateUser,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
