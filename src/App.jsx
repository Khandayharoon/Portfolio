import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import CursorTrailCanvas from "./components/CursorTrailCanvas";
function App() {
  return (
    <>
      <CursorTrailCanvas
        color={"red"}
        className="pointer-events-none fixed inset-0 z-[999999999999999999] h-full w-full"
      />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
