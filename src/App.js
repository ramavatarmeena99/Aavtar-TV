import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./Pages/HomePage";
import VideoList from "./Pages/VideoList";
import Liked from "./Pages/Liked";
import History from "./Pages/History";
import PlayList from "./Pages/PlayList";
import WatchLater from "./Pages/WatchLater";
import Home from "./Pages/Home";
import VideoPlayer from "./Pages/VideoPlayer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videoList" element={<Home />} />
          <Route path="/videoList" element={<VideoList />} />
          <Route path="/playList" element={<PlayList />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/history" element={<History />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/videoplayer" element={<VideoPlayer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
