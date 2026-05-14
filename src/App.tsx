import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";

function App() {
  return (
    <div>
      <header>
        <Link to="/" className="site-title">
          CODE_INSIGHTS
        </Link>
        <nav>
          <Link to="/">language</Link>
          <Link to="/about">about</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:slug" element={<Article />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
