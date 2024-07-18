import { Route, Routes } from "react-router-dom";
import { Huru, Mara } from "./screens"


function App() {
  return <Routes>
    <Route path="/" element={<Huru />} />
    <Route path="/mara" element={<Mara />} />
  </Routes>
}

export default App;
