import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="flex w-full h-screen">
          <div className="w-full flex items-center justify-center lg:w-1/2">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          <div className="hidden relative lg:flex items-center justify-center h-full w-1/2 bg-gray-200">
            <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-400 rounded-full animate-bounce" />
            <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
