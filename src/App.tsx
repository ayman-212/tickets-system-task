import React from "react";
import Dashboard from "./modules/dashboard/pages/Dashboard";
import Layout from "./modules/layout/pages/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Layout>
        <Dashboard />
      </Layout>
    </>
  );
}

export default App;
