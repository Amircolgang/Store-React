import { Route , Routes } from "react-router";
import Home from "./pages/home/home";
import Shops from "./pages/shops/shops";
const App = () => {

  return (
    <>
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/"element={<Shops />} />
      </Routes>
    </>
  )
}

export default App;