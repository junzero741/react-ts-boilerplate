import { BrowserRouter, Route, Routes } from 'react-router-dom'

interface Route {
  path: string
  element: JSX.Element
}

interface Props {
  routes: Route[]
}

const RouterComponent = ({ routes }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element}></Route>
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent
