import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CareerDetailPage } from "./pages/CareerDetailPage";
import { CareersPage } from "./pages/CareersPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UniversitiesPage } from "./pages/UniversitiesPage";
import { UniversityDetailPage } from "./pages/UniversityDetailPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/universidades" element={<UniversitiesPage />} />
        <Route path="/universidades/:id" element={<UniversityDetailPage />} />
        <Route path="/carreras" element={<CareersPage />} />
        <Route path="/carreras/:id" element={<CareerDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
