import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './components/MainLayout'
import Home from './components/Home'
import Timeline from './components/Timeline'
import Stats from './components/Stats'
import Error from './components/Error'
const router = createBrowserRouter([{
  path:"/",
  element:<MainLayout/>,
  children:[{
    index: true,
    element:<Home/>
  },
{
    path:"/timeline",
  element:<Timeline/>
},
{
  path:"/stats",
  element:<Stats/>
}
],
errorElement: <Error/>
},
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
