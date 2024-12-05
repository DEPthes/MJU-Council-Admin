import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login/Login";
import BusinessDetailPage from "./pages/ActivityReport/BusinessDetailPage";
import BusinessFixPage from "./pages/ActivityReport/BusinessFixPage";
import BusinessListPage from "./pages/ActivityReport/BusinessListPage";
import CoalitionDetailPage from "./pages/ActivityReport/CoalitionDetailPage";
import CoalitionFixPage from "./pages/ActivityReport/CoalitionFixPage";
import CoalitionListPage from "./pages/ActivityReport/CoalitionListPage";
import NewBusinessPage from "./pages/ActivityReport/NewBusinessPage";
import NewCoalitionPage from "./pages/ActivityReport/NewCoalitionPage";
import PolicyListPage from "./pages/ActivityReport/PolicyListPage";
import FooterPage from "./pages/Footer/FooterPage";
import Home from "./pages/Home/HomePage";
// import IntroductionPage from "./pages/Introduction/IntroductionPage";
// import OrganizationPage from "./pages/Introduction/OrganizationPage";
// import EachPartPage from "./pages/Introduction/EachPartPage";
// import CentralCommiteePage from "./pages/Introduction/CentralCommiteePage";

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
          <Route
            path="/activityReport/coalitionList"
            element={<CoalitionListPage />}
          />
          <Route
            path="/activityReport/newCoalition"
            element={<NewCoalitionPage />}
          />
          <Route
            path="/activityReport/coalitionDetail/:id"
            element={<CoalitionDetailPage />}
          />
          <Route
            path="/activityRepory/coalitionFix/:id"
            element={<CoalitionFixPage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
