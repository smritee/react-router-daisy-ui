import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,        
      },
      {
        path:"/books/:bookId",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('/booksData.json')
      },
      {
        path: "listedBooks",
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch('/booksData.json') //Worst way
      }  ,    
      {
        path: "/dashboard",
        element:<Dashboard></Dashboard>,
      }
      

    ],
    errorElement:<ErrorPage></ErrorPage>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
  
)
