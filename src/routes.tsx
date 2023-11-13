import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";


const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<BookingPage />} path="/booking" />
      <Route element={<ConfirmationPage />} path="/confirmation" />
    </Routes>
  )
}

export default MainRoutes
