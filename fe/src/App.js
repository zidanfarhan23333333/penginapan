import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route
              path="/login"
              element={
                <div className="flex w-full h-screen">
                  <div className="w-full flex items-center justify-center lg:w-1/2">
                    <Login />
                  </div>
                  <div className="hidden relative lg:flex items-center justify-center h-full w-1/2 bg-gray-200">
                    <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-400 rounded-full animate-bounce" />
                    <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
                  </div>
                </div>
              }
            />
            <Route
              path="/register"
              element={
                <div className="flex w-full h-screen">
                  <div className="w-full flex items-center justify-center lg:w-1/2">
                    <Register />
                  </div>
                  <div className="hidden relative lg:flex items-center justify-center h-full w-1/2 bg-gray-200">
                    <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-400 rounded-full animate-bounce" />
                    <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
