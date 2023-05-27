import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import styles from "./App.module.css";
import Protected from "./components/Protected/Protected";
import Error from "./pages/Erorr/Error";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import Signup from "./pages/Signup/Singup";
import Blog from "./pages/Blog/Blog";
import SubmitBlog from "./pages/SubmitBlog/SubmitBlog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import UpdateBlog from "./pages/UpdateBlog/UpdateBlog";

function App() {
  const isAuth = useSelector((state) => state.user.auth);
  return (
    <>
      <div className={styles.container}>
        <BrowserRouter>
          <div className={styles.layout}>
            <Navbar />
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <div className={styles.main}>
                    <Home />
                  </div>
                }
              />

              <Route
                path="/admin"
                exact
                element={<div className={styles.main}>Administration page</div>}
              />

              <Route
                path="/blog/all"
                exact
                element={
                  <Protected isAuth={isAuth}>
                    <div className={styles.main}>
                      <Blog />
                    </div>
                  </Protected>
                }
              />
              <Route
                path="/blog/:id"
                exact
                element={
                  <Protected isAuth={isAuth}>
                    <div className={styles.main}>
                      <BlogDetails />
                    </div>
                  </Protected>
                }
              />

              <Route
                path="/blog-update/:id"
                exact
                element={
                  <Protected isAuth={isAuth}>
                    <div className={styles.main}>
                      <UpdateBlog />
                    </div>
                  </Protected>
                }
              />

              <Route
                path="/submit"
                exact
                element={
                  <Protected isAuth={isAuth}>
                    <div className={styles.main}>
                      <SubmitBlog />
                    </div>
                  </Protected>
                }
              />

              <Route
                path="/login"
                exact
                element={
                  <div className={styles.main}>
                    <Login />
                  </div>
                }
              />

              <Route
                path="/signup"
                exact
                element={
                  <div className={styles.main}>
                    <Signup />
                  </div>
                }
              />

              <Route
                path="*"
                element={
                  <div>
                    <Error />
                  </div>
                }
              />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
