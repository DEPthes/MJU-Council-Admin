import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import BusinessListPage from "./pages/ActivityReport/BusinessListPage";
import NewBusinessPage from "./pages/ActivityReport/NewBusinessPage";
import PolicyListPage from "./pages/ActivityReport/PolicyListPage";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route element={<Layout />}> */}
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
          {/* <Route
          path="/activityReport/businessListDetail/:id"
          element={<BusinessListDetailPage />}
        /> */}
          {/* </Route> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
