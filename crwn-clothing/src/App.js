import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Home from "./routes/home/home.component.jsx";

const App = () => {

  const Shop = () => {
    return (
      <div>
        <h1>Shop</h1>
      </div>
    )
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>  
    </div>
  )
}

export default App;
