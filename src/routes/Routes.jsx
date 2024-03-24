import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import SingleBlogDetails from "../pages/SingleBlogDetails";
import Bookmarks from "../pages/Bookmarks";
import Content from "../components/Content";
import Author from "../components/Author";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayouts></MainLayouts>,
      children: [
        {
          // index: true (alternative of path)
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>,
          loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
        },
        {
          path: '/blogs/:id',
          element:<SingleBlogDetails></SingleBlogDetails>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index: true,
                element: <Content></Content>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),

            },
            {
                path:'author',
                element: <Author></Author>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
        },
        {
          path:'/bookmarks',
          element:<Bookmarks></Bookmarks>,
        },
      ]
    }
    
  ])