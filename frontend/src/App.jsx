import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import TourDetail from "./components/TourDetailPage/TourDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import NotFoundPage from "./components/ErrorPages/NotFoundPage";
import UserProfile from "./components/UserProfile/UserProfile";
import ForgetPassword from "./components/Authentication/ForgetPassword";
import ResetPassword from "./components/Authentication/ResetPassword";
import CreateBookingCheckout from "./utils/CreateBookingCheckout";
import MyBooking from "./components/UserProfile/MyBooking";
import MyReviews from "./components/UserProfile/MyReviews";
import SettingPage from "./components/UserProfile/SettingPage";

function App() {
  // Check if current path matches auth routes

  return (
    <>
      <Header />
      <main className="main">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/tour/:slug" element={<TourDetail />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/forgetpassword" element={<ForgetPassword />} />{" "}
          <Route path="/signup" element={<Signup />} />{" "}
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
          {/* <Route path="/user-profile" element={<UserProfile />} /> */}
          <Route path="/user-profile/my-booking" element={<MyBooking />} />
          <Route
            path="/createBookingCheckout"
            element={<CreateBookingCheckout />}
          />
          <Route path="/user-profile" element={<UserProfile />}>
            {/* 👇 This sets /user-profile to redirect to /user-profile/settings */}
            <Route index element={<Navigate to="settings" replace />} />
            <Route path="settings" element={<SettingPage />} />
            <Route path="my-booking" element={<MyBooking />} />
            <Route path="my-reviews" element={<MyReviews />} />
          </Route>
          <Route path="/my-booking" element={<MyBooking />} />
          {/* <Route path="/user-profile/my-reviews" element={<MyReviews />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
