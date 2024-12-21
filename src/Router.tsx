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
import MinutesDetailPage from "./pages/Document/MinutesDetailPage";
import MinutesEditPage from "./pages/Document/MinutesEditPage";
import MinutesListPage from "./pages/Document/MinutesListPage";
import NewMinutesPage from "./pages/Document/NewMinutesPage";
import NewRegulationsPage from "./pages/Document/NewRegulationsPage";
import RegulationsDetailPage from "./pages/Document/RegulationsDetailPage";
import RegulationsEditPage from "./pages/Document/RegulationsEditPage";
import RegulationsListPage from "./pages/Document/RegulationsListPage";
import FooterPage from "./pages/Footer/FooterPage";
import Home from "./pages/Home/HomePage";
import EventDetailPage from "./pages/News/EventDetailPage";
import EventEditPage from "./pages/News/EventEditPage";
import EventGuideDetailPage from "./pages/News/EventGuideDetailPage";
import EventGuideEditPage from "./pages/News/EventGuideEditPage";
import EventListPage from "./pages/News/EventListPage";
import NewEventGuidePage from "./pages/News/NewEventGuidePage";
import NewEventPage from "./pages/News/NewEventPage";
import NewNoticePage from "./pages/News/NewNoticePage";
import NoticeDetailPage from "./pages/News/NoticeDetailPage";
import NoticeEditPage from "./pages/News/NoticeEditPage";
import CentralCommiteePage from "./pages/Introduction/CentralCommiteePage";
import EachPartPage from "./pages/Introduction/EachPartPage";
import IntroductionPage from "./pages/Introduction/IntroductionPage";
import OrganizationPage from "./pages/Introduction/OrganizationPage";
import NoticeListPage from "./pages/News/NoticeListPage";
import { useState } from "react";

const Router = () => {
  const [isFixModal, setIsFixModal] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Layout isFixModal = {isFixModal} setIsFixModal={setIsFixModal}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/footer" element={<FooterPage setIsFixModal={setIsFixModal}/>} />
          <Route
            path="/introduction/introduce"
            element={<IntroductionPage setIsFixModal={setIsFixModal}/>}
          />
          <Route
            path="/introduction/organization"
            element={<OrganizationPage setIsFixModal={setIsFixModal}/>}
          />
          <Route
            path="/introduction/eachpart"
            element={<EachPartPage setIsFixModal={setIsFixModal}/>}
          />
          <Route
            path="/introduction/centralcommitee"
            element={<CentralCommiteePage setIsFixModal={setIsFixModal}/>}
          />
          <Route
            path="/activityReport/policyList"
            element={<PolicyListPage setIsFixModal={setIsFixModal}/>}
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
