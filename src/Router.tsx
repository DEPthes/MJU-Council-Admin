import { BrowserRouter, Route, Routes } from "react-router-dom";
import BusinessListPage from "./pages/ActivityReport/BusinessListPage";
import PolicyListPage from "./pages/ActivityReport/PolicyListPage";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/activityReport/policyList" element={<PolicyListPage />} />
        <Route path="/activityReport/policyList" element={<PolicyListPage />} />
        <Route
          path="/activityReport/businessList"
          element={<BusinessListPage />}
        />
        {/* <Route
          path="/activityReport/businessListDetail/:id"
          element={<BusinessListDetailPage />}
        /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
