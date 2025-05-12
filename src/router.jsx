import SearchClient from "./pages/clients/SearchClient"
import NotFound from "./NotFound"
import Clients from "./pages/clients/Clients"
import Client from "./pages/clients/Client"
import SearchProduct from "./pages/products/SearchProduct"
import Products from "./pages/products/Products"
import Product from "./pages/products/Product"

export let router = [
    {
        path: '*',
        element: <NotFound />, 
    },
    {
        path: '/',
        element: <SearchClient />, 
    },
    {
        path: '/clients',
        element: <Clients />, 
    },
    {
        path: '/client',
        element: <Client />, 
    },
    {
        path: '/search-products',
        element: <SearchProduct />, 
    },
    {
        path: '/products',
        element: <Products />, 
    },
    {
        path: '/product',
        element: <Product />, 
    }
]