import SearchClient from "./pages/clients/SearchClient"
import NotFound from "./NotFound"
import Clients from "./pages/clients/Clients"
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
    }
]