import { BrowserRouter, Route, Routes } from "react-router-dom";
import PolicyListPage from "./pages/ActivityReport/PolicyListPage";
import Home from "./pages/Home";
import Login from "./components/Login/Login";

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
        <Route path="/activityReport/policyList" element={<PolicyListPage />} />

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
