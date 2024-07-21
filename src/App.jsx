import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppLayout, MainLayout } from "./layouts";
import { Home, VideoDetail, ChannelDetail, SearchVideos } from "./pages";
import { Login, Register } from "./login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="videodetail/:videoId" element={<VideoDetail />} />
            <Route path="channel/:id" element={<ChannelDetail />} />
            <Route path="search/:searchterm" element={<SearchVideos />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}