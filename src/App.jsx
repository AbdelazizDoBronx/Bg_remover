import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import Navbar from './Components/Home/Navbar';
import Results from './Pages/Results';
import Footer from './Components/Home/Footer';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/results',
      element: <Results />,
    },
    {
      path: '/pricing',
      element: <Pricing />,
    },
  ]);
  
  return (
    <div className='max-w-[1200px] mx-auto'>
    <Navbar/>
    <RouterProvider router={router} />
    <Footer/>
    </div>
  )
}

export default App