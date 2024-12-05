import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import BusinessDetailPage from "./pages/ActivityReport/BusinessDetailPage";
import BusinessFixPage from "./pages/ActivityReport/BusinessFixPage";
import BusinessListPage from "./pages/ActivityReport/BusinessListPage";
import NewBusinessPage from "./pages/ActivityReport/NewBusinessPage";
import PolicyListPage from "./pages/ActivityReport/PolicyListPage";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/activityReport/policyList"
            element={<PolicyListPage />}
          />
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
          {/* </Route> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
