import { useState } from 'react'
import './App.css'
import Switcher from './components/Switcher'
// import { useTranslation } from '  react-i18next'
import Layout from './Layout/Layout'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Develop from './pages/Develop/Develop'


function App ()  {
  const router = createBrowserRouter ( [ 
    {
      path : "/",
      element : <Layout />,
      children : [
        {
          index : true ,
          element : <Home />
        },
        {
          path : "about" ,
          element : <About />
        },
        {
          path : "contact"  ,
          element : <Contact />
        },
        {
          path : "develop",
          element : <Develop />
        },
        
        {
          path : "*",
          element : <NotFound />
        }
      ]
    },
  ])

  return (
    <>
      <div className='dark:bg-black text-black dark:text-white'>
        
      <Switcher />
        <RouterProvider router={router} />

    </div>
    </>
  )
}

export default App
