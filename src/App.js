import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import VideoList from "./Pages/VideoList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videoList" element={<VideoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
