import { BrowserRouter, Route, Routes } from "react-router-dom";
import PolicyListPage from "./pages/ActivityReport/PolicyListPage";
import Home from "./pages/Home/HomePage";
import Login from "./components/Login/Login";
import FooterPage from "./pages/Footer/FooterPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route path="/" element={<Home />} />
        <Route 
          path="/login" 
          element={<Login />} 
        />
        <Route
          path="/footer"
          element={<FooterPage/>}
        />
        <Route path="/activityReport/policyList" element={<PolicyListPage />} />

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
