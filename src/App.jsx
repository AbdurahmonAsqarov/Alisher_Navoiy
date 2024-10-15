import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// Components
import Home from './Components/Home/Home'
import ComponentLayout from './Components/Layout/ComponentLayout'
import Xamsa_1 from './Components/Pages/Xamsa_1/Xamsa_1'
import Xamsa_2 from './Components/Pages/Xamsa_2/Xamsa_2'
import Xamsa_3 from './Components/Pages/Xamsa_3/Xamsa_3'
import Xamsa_4 from './Components/Pages/Xamsa_4/Xamsa_4'
import Xamsa_5 from './Components/Pages/Xamsa_5/Xamsa_5'


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ComponentLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/Mahzan_ul_asror',
          element: <Xamsa_1/>
        },
        {
          path: '/Xusrav_va_Shirin',
          element: <Xamsa_2/>
        },
        {
          path: '/Layli_va_Majnun',
          element: <Xamsa_3/>
        },
        {
          path: '/Haft_paykar',
          element: <Xamsa_4/>
        },
        {
          path: '/Iskandarnoma',
          element: <Xamsa_5/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
