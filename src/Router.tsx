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
import NoticeListPage from "./pages/News/NoticeListPage";
import NewNoticePage from "./pages/News/NewNoticePage";
import NoticeDetailPage from "./pages/News/NoticeDetailPage";
import NoticeEditPage from "./pages/News/NoticeEditPage";
import MinutesListPage from "./pages/Document/MinutesListPage";
import MinutesDetailPage from "./pages/Document/MinutesDetailPage";
import NewMinutesPage from "./pages/Document/NewMinutesPage";
import MinutesEditPage from "./pages/Document/MinutesEditPage";
import RegulationsDetailPage from "./pages/Document/RegulationsDetailPage";
import RegulationsListPage from "./pages/Document/RegulationsListPage";
import NewRegulationsPage from "./pages/Document/NewRegulationsPage";
import RegulationsEditPage from "./pages/Document/RegulationsEditPage";
import EventListPage from "./pages/News/EventListPage";
import NewEventPage from "./pages/News/NewEventPage";
import EventDetailPage from "./pages/News/EventDetailPage";
import NewEventGuidePage from "./pages/News/NewEventGuidePage";
import EventGuideDetailPage from "./pages/News/EventGuideDetailPage";
import EventEditPage from "./pages/News/EventEditPage";
import EventGuideEditPage from "./pages/News/EventGuideEditPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/footer" element={<FooterPage />} />
          <Route
            path="/introduction/introduce"
            element={<IntroductionPage />}
          />
          <Route
            path="/introduction/organization"
            element={<OrganizationPage />}
          />
          <Route
            path="/introduction/eachpart"
            element={<EachPartPage />}
          />
          <Route
            path="/introduction/centralcommitee"
            element={<CentralCommiteePage />}
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
          <Route path="/news/notice" element={<NoticeListPage />} />
          <Route path="/news/notice/:id" element={<NoticeDetailPage />} />
          <Route path="/news/notice/:id/edit" element={<NoticeEditPage />} />
          <Route path="/news/notice/new" element={<NewNoticePage />} />
          <Route path="/news/event" element={<EventListPage />} />
          <Route path="/news/event/new" element={<NewEventPage />} />
          <Route path="/news/event/:id" element={<EventDetailPage />} />
          <Route path="/news/event/:id/edit" element={<EventEditPage />} />
          <Route path="/news/event/:id/new" element={<NewEventGuidePage />} />
          <Route
            path="/news/event/:id/:guideId"
            element={<EventGuideDetailPage />}
          />
          <Route
            path="/news/event/:id/:guideId/edit"
            element={<EventGuideEditPage />}
          />
          <Route path="/document/minutes" element={<MinutesListPage />} />
          <Route path="/document/minutes/:id" element={<MinutesDetailPage />} />
          <Route
            path="/document/minutes/:id/edit"
            element={<MinutesEditPage />}
          />
          <Route path="/document/minutes/new" element={<NewMinutesPage />} />
          <Route
            path="/document/regulations"
            element={<RegulationsListPage />}
          />
          <Route
            path="/document/regulations/:id"
            element={<RegulationsDetailPage />}
          />
          <Route
            path="/document/regulations/:id/edit"
            element={<RegulationsEditPage />}
          />
          <Route
            path="/document/regulations/new"
            element={<NewRegulationsPage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
