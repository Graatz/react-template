import Layout from "../components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { ROUTES } from "../config/routes";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.login} element={<Login />} />
        </Routes>
      </Layout>
    </>
  );
}
