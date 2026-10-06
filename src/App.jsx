import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./assets/components/layout/AppLayout";
import Homepage from "./assets/components/pages/Homepage";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App  
