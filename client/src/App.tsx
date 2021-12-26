import React from "react";

import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import { StateProvider } from "./state/State";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//partial components
import { Navigation, PrivateRoute, PublicRoute } from "./components";

//pages
import {
  Customers,
  History,
  Stats,
  Appointments,
  Signin,
  Home,
  Signup,
  Profile,
  Create,
} from "./pages";

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/signin" element={<PublicRoute />}>
            <Route path="/signin" element={<Signin />} />
          </Route>
          <Route path="/signup" element={<PublicRoute />}>
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="/customers" element={<PrivateRoute />}>
            <Route path="/customers" element={<Customers />} />
          </Route>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/create" element={<Create />} />
          </Route>
          <Route path="/history" element={<PrivateRoute />}>
            <Route path="/history" element={<History />} />
          </Route>
          <Route path="/stats" element={<PrivateRoute />}>
            <Route path="/stats" element={<Stats />} />
          </Route>
          <Route path="/stats" element={<PrivateRoute />}>
            <Route path="/stats" element={<Stats />} />
          </Route>
          <Route path="/appointments" element={<PrivateRoute />}>
            <Route path="/appointments" element={<Appointments />} />
          </Route>
        </Routes>
        <Navigation />
      </StateProvider>

      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
