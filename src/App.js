import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import VideoList from "./Pages/VideoList";
import Liked from "./Pages/Liked";
import History from "./Pages/History";
import WatchLater from "./Pages/WatchLater";
import PlayList from "./Pages/PlayList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videoList" element={<VideoList />} />
          <Route path="/playList" element={<PlayList />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/history" element={<History />} />
          <Route path="/WatchLater" element={<WatchLater />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
