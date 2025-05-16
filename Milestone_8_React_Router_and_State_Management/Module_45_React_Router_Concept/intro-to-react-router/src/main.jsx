import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Laptops from './components/Laptops/Laptops.jsx'
import About from './components/About/About.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import History from './components/History/History.jsx'
import Users from './components/Users/Users.jsx'
import Users2Sus from './components/Users2Sus/Users2Sus.jsx'
import { Suspense } from 'react'
import Users2Axios from './components/Users2Axios/Users2Axios.jsx'
import axios from 'axios'
import UserDetails from './components/UserDetails/UserDetails.jsx'
import Posts from './components/Posts/Posts.jsx'
import PostDetails from './components/PostDetails/PostDetails.jsx'

const UsersPromiseforSus = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const usersPromiseAxios = axios.get("https://jsonplaceholder.typicode.com/users");

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptops', Component: Laptops },
      {
        path: 'users',
        Component: Users,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'users/:userId',
        Component: UserDetails,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path: 'posts',
        Component: Posts,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts")
      },
      {
        path: 'posts/:postId',
        Component: PostDetails,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: 'users2sus',
        element:
          <Suspense>
            <Users2Sus UsersPromiseforSus={UsersPromiseforSus} />
          </Suspense>
      },
      {
        path: 'users2Axios',
        element:
          <Suspense>
            <Users2Axios usersPromiseAxios={usersPromiseAxios} />
          </Suspense>,
      },
      
    ]
  },
  {
    path: 'about',
    Component: About,
    children: [
      { index: true, Component: AboutUs },
      { path: 'history', Component: History }
    ]
  },
  {
    path: 'blogs',
    element: <div>All my blogs here</div>
  },
  {
    path: 'app',
    element: <App />
  },
  {
    path: '*',
    element: <h3>Not Found: 404 Status</h3>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
