import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { loginSuccess } from "./redux/authSlice";

function App() {
  const user = useSelector((state) => state.auth.login.currentUser);
  let axiosJWT = axios.create();

  const refreshToken = async () => {
    try {
      const res = await axios.post("/auth/refreshToken", {
        refreshToken: user.refreshToken,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  axiosJWT.interceptors.request.use(
    async (config) => {
      let date = new Date();
      //decode accessToken = lib jwt-decode de lay time het han
      const decodedToken = jwt_decode(user?.accessToken);
      if (decodedToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        const refreshUser = {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        };
        dispatchEvent(loginSuccess(refreshUser));
        config.headers["Authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar user={user} axiosJWT={axiosJWT} />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={<Profile user={user} axiosJWT={axiosJWT} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
