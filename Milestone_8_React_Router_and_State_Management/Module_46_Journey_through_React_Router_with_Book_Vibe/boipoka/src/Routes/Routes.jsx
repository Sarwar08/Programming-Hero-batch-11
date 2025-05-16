import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { Component } from "react";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,   
                Component: Home,
                path: '/',
                loader: () => fetch('booksData.json'),
            },
            {
                path: '/about',
                Component: About,
            },
            {
                path: 'readlist',
                Component: ReadList,
                loader: () => fetch('booksData.json'),
            },
            {
                path: '/bookDetails/:id',
                Component: BookDetails,
                loader: () => fetch('booksData.json'),
                // loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
            }
        ]
    },
])

export default router