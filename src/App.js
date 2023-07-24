import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Serials from "./components/Serials";
import Search from "./components/Search";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/serials" element={<Serials />} />
          <Route path="/movie/search/:movieName" element={<Search />} />
          <Route path="/favorite" element={<Favorites />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
