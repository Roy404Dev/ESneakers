import "./styles/main.scss";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />
    }
  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App
