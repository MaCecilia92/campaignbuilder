import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

const Home = lazy(() => import("componentsApp/home"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
