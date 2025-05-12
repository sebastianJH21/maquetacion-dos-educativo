import SearchClient from "./pages/clients/SearchClient"
import NotFound from "./NotFound"
import Clients from "./pages/clients/Clients"
import Client from "./pages/clients/Client"

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
    }
]