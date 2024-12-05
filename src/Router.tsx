import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login/Login";
import BusinessDetailPage from "./pages/ActivityReport/BusinessDetailPage";
import BusinessFixPage from "./pages/ActivityReport/BusinessFixPage";
import BusinessListPage from "./pages/ActivityReport/BusinessListPage";
import CoalitionPage from "./pages/ActivityReport/CoalitionPage";
import NewBusinessPage from "./pages/ActivityReport/NewBusinessPage";
import PolicyListPage from "./pages/ActivityReport/PolicyListPage";
import FooterPage from "./pages/Footer/FooterPage";
import Home from "./pages/Home/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/footer" element={<FooterPage />} />
          <Route
            path="/activityReport/policyList"
            element={<PolicyListPage />}
          />
          <Route
            path="/activityReport/businessList"
            element={<BusinessListPage />}
          />
          <Route
            path="/activityReport/newBusiness"
            element={<NewBusinessPage />}
          />
          <Route
            path="/activityReport/businessDetail/:id"
            element={<BusinessDetailPage />}
          />
          <Route
            path="/activityRepory/businessFix/:id"
            element={<BusinessFixPage />}
          />
          <Route path="/activityReport/coalition" element={<CoalitionPage />} />
          {/* <Route
            path="/activityReport/coalitionDetail/:id"
            element={<CoalitionDetailPage />}
          /> */}
          {/* </Route> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
