import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavigationBar/Navbar";
import Home from "./pages/Home";
import Accomodation from "./pages/Akomodasi/accommodations";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword/resetPassword";
import DetailAkomodasi from "./pages/Akomodasi/accommodationDetail";
import UsahaList from "./pages/Pengusaha/usahaList";
import CekPesanan from "./pages/Pesanan/cekpesanan";
import CreateUsaha from "./pages/Pengusaha/CreateUsaha";
import UpdateUsaha from "./pages/Pengusaha/UpdateUsaha";
import UsahaDetail from "./pages/Pengusaha/usahaDetail";
import FooterPages from "./components/FooterPages/Footer";

const role = localStorage.getItem("role");

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/resetPassword"
          element={
            <div className="flex w-full h-screen">
              <div className="w-full flex items-center justify-center lg:w-1/2">
                <ResetPassword />
              </div>
              <div className="hidden relative lg:flex items-center justify-center h-full w-1/2 bg-gray-200">
                <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-400 rounded-full animate-bounce" />
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
              </div>
            </div>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <FooterPages />
            </>
          }
        />
        <Route
          path="/accommodations"
          element={
            <>
              <Navbar />
              <Accomodation />
              <FooterPages />
            </>
          }
        />
        <Route
          path="/cekpesanan"
          element={
            <>
              <Navbar />
              <CekPesanan/>
              <FooterPages />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <FooterPages />
            </>
          }
        />

        <Route
          path="/detailAkomodasi/:id"
          element={
            <>
              <Navbar />
              <DetailAkomodasi />
              <FooterPages/>
            </>
          }
        />
        <Route
          path="/usaha"
          element={
            <>
              <Navbar />
              {role === "pengusaha" ? <UsahaList /> : null}
              <FooterPages />
            </>
          }
        />
        <Route
          path="/usaha/:id"
          element={
            <>
              <Navbar />
              {role === "pengusaha" ? <UsahaDetail /> : null}
              <FooterPages/>
            </>
          }
        />
        <Route
          path="/usaha/create-usaha"
          element={
            <>
              <Navbar />
              {role === "pengusaha" ? <CreateUsaha /> : null}
            </>
          }
        />
        <Route
          path="/usaha/UpdateUsaha/:id"
          element={
            <>
              <Navbar />
              {role === "pengusaha" ? <UpdateUsaha /> : null}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
