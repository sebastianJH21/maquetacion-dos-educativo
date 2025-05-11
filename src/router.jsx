import App from "./App"
import NotFound from "./NotFound"
export let router = [
    {
        path: '/',
        element: <App />, 
    },
    {
        path: '*',
        element: <NotFound />, 
    }
]