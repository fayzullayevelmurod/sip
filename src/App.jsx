import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@components/layouts/'

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <h1>404 Error, Page Not Found!</h1>,
      children: []
    }
  ])

  return <RouterProvider router={routes} />
}
