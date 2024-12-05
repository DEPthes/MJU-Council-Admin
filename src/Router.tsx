import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login/Login";
import BusinessDetailPage from "./pages/ActivityReport/BusinessDetailPage";
import BusinessFixPage from "./pages/ActivityReport/BusinessFixPage";
import BusinessListPage from "./pages/ActivityReport/BusinessListPage";
import NewBusinessPage from "./pages/ActivityReport/NewBusinessPage";
import PolicyListPage from "./pages/ActivityReport/PolicyListPage";
import FooterPage from "./pages/Footer/FooterPage";
import Home from "./pages/Home/HomePage";
import IntroductionPage from "./pages/Introduction/IntroductionPage";
import OrganizationPage from "./pages/Introduction/OrganizationPage";
import EachPartPage from "./pages/Introduction/EachPartPage";
import CentralCommiteePage from "./pages/Introduction/CentralCommiteePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
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
                  path="/activityReport/BusinessDetail/:id"
                  element={<BusinessDetailPage />}
                />
                <Route
                  path="/activityRepory/BusinessFix/:id"
                  element={<BusinessFixPage />}
                />
                <Route
                  path="/introduction/introduce"
                  element={<IntroductionPage/>}
                />
                <Route
                  path="/introduction/organization"
                  element={<OrganizationPage/>}
                />
                <Route
                  path="/introduction/eachpart"
                  element={<EachPartPage/>}
                />
                <Route
                  path="/introduction/centralCommitee"
                  element={<CentralCommiteePage/>}
                />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
