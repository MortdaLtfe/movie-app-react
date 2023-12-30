import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
