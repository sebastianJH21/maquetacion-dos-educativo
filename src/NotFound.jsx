import { useLocation } from "react-router-dom"
function NotFound() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const emial = query.get('email');
  return (
    <>
          <div className="card">
              <h1>404</h1>
              <h2>Page not found</h2>
              <a href="/">Back to home</a>
              <h1>{emial}</h1>
        </div>
    </>
  )
}

export default NotFound
