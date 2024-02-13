import { lazy, Suspense } from 'react'
import { Spin } from 'antd';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
const Home = lazy(() => import("./Home"));

const LoadingSpinner = () => {
  return <Spin />
};


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route index element={<Suspense fallback={<LoadingSpinner />}><Home /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;