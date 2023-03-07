import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages";
import UseEffect from "./pages/useEffect";
import UseRef from "./pages/useRef";
import UseState from "./pages/useState";
import Week2 from "./test/week2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/useState" element={<UseState />}/>
          <Route path="/useEffect" element={<UseEffect />}/>
          <Route path="/useRef" element={<UseRef />}/>
          <Route path="/week2" element={<Week2 />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
