import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const navigate = useNavigate()
  const isAuthenticated = localStorage.getItem("authenticated") === "true"

  if (isAuthenticated) {
    return <Element {...rest} />
  } else {
    navigate('/login') 
    return null
  }
}

export default PrivateRoute
