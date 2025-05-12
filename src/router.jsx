import SearchClient from "./pages/clients/SearchClient"
import NotFound from "./NotFound"
export let router = [
    {
        path: '/',
        element: <SearchClient />, 
    },
    {
        path: '*',
        element: <NotFound />, 
    }
]