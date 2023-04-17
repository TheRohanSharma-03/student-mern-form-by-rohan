import Home from "./components/Home";
import Show from "./components/Show";
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/show" element={<Show/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
