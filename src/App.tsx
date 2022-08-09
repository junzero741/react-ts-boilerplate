import Home from '@src/pages/Home'
import About from '@src/pages/About'
import RouteComponent from '@src/RouterComponent'

export default function App() {
  return (
    <RouteComponent
      routes={[
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
      ]}
    />
  )
}
