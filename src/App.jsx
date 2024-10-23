import { Routes, Route } from "react-router-dom";
import "./App.css";
import DashbordLayout from "./layout/DashbordLayout";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import ContentManagement from "./pages/ContentManagement";
import Analytics from "./pages/Analytics";
import ModerationTools from "./pages/ModerationTools";
import SiteSettings from "./pages/SiteSettings";
import Monetization from "./pages/Monetization";
import Seo from "./pages/Seo";
import { Security } from "./pages/Security";
import Customizations from "./pages/Customizations";
import System from "./pages/System";

function App() {
  return (
    <Routes>
      <Route path="" element={<DashbordLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/content-management" element={<ContentManagement />} />
        <Route path="/analytics-&-insights" element={<Analytics />} />
        <Route path="/moderation-tools" element={<ModerationTools />} />
        <Route path="/site-settings-&-config" element={<SiteSettings />} />
        <Route path="/monetization-&-adverts" element={<Monetization />} />
        <Route path="/seo-&-content-discovery" element={<Seo />} />
        <Route path="/security-&-logs" element={<Security />} />
        <Route path="/customizations" element={<Customizations />} />
        <Route path="/system-configuration" element={<System />} />
      </Route>
    </Routes>
  );
}

export default App;
