import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import dashboard from "../assets/dashboard.png";
import user from "../assets/user.png";
import content from "../assets/content.png";
import analysis from "../assets/analysis.png";
import setting from "../assets/setting.png";

const { Sider, Content, Header } = Layout;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const items = [
  getItem(
    "Dashboard",
    "/dashboard",
    <img src={dashboard} alt="" className="w-4" />
  ),
  getItem(
    "User Management",
    "/user-management",
    <img src={user} alt="" className="w-4" />
  ),
  getItem(
    "Content Management",
    "/content-management",
    <img src={content} alt="" className="w-4" />
  ),
  getItem(
    "Analytics & Insights",
    "/analytics-&-insights",
    <img src={analysis} alt="" className="w-4" />
  ),
  getItem(
    "Moderation Tools",
    "/moderation-tools",
    <img src={setting} alt="" className="w-4" />
  ),
  getItem(
    "Site Settings & Config",
    "/site-settings-&-config",
    <img src={setting} alt="" className="w-4" />
  ),
  getItem(
    "Monetization & Adverts",
    "/monetization-&-adverts",
    <img src={setting} alt="" className="w-4" />
  ),
  getItem(
    "SEO & Content Discovery",
    "/seo-&-content-discovery",
    <img src={setting} alt="" className="w-4" />
  ),
  getItem(
    "Security & Logs",
    "/security-&-logs",
    <img src={setting} alt="" className="w-4" />
  ),
  getItem(
    "Customizations",
    "/customizations",
    <img src={setting} alt="" className="w-4" />
  ),
  getItem(
    "System Configuration",
    "/system-configuration",
    <img src={setting} alt="" className="w-4" />
  ),
];

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="bg-[#0A0E16]"
        width={250}
      >
        <div className="p-4 text-xl font-bold flex items-center">
          <img src={logo} alt="" className=" mx-2" />
          {/* {!collapsed && <h2 className="text-[1rem]">Your App</h2>} */}
        </div>
        <Menu
          theme="dark"
          className="bg-[#0A0E16]"
          selectedKeys={[location.pathname]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
        <div className="flex justify-center items-center flex-col relative top-10">
          <img src="/path/to/logout/icon.png" alt="" className="w-4" />
          {/* {!collapsed && <span className="hidden sm:inline">Log Out</span>} */}
        </div>
      </Sider>
      <Layout>
        <Header className="bg-white" />
        <Content className="p-3">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
