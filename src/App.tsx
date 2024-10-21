
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import GlobalProvider from './components/globalProvider/GlobalProvider'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <GlobalProvider> <RouterProvider router={router} /></GlobalProvider>
  )
}

export default App
