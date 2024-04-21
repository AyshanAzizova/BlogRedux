import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './app/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import FAQ from './pages/FAQ/FAQ';
import Blog from './pages/Blog/Blog';
import Creators from './pages/Creators/Creators';
import BlogDetail from './pages/BlogDetail/BlogDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "FAQ",
        element: <FAQ/>
      },
      {
        path:"Bloq",
        element:<Blog/>
      },
      {
       path:`/Bloq/:id`,
       element:<BlogDetail/>
      }, 
      {
        path:"Creators",
        element:<Creators/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
);
