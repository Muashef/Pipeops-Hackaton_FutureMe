import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
  ]);

  return (
    <>
      <div>
          <RouterProvider router={router} />
        </div>
    </>
  )
}

export default App
