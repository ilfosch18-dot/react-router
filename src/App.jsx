import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./assets/components/layout/AppLayout";
import Homepage from "./assets/components/pages/Homepage";
import Prodotti from "./assets/components/pages/Prodotti";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/prodotti" element={<Prodotti />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App  
