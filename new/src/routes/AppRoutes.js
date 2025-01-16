import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import BaseLayout from "../common/base-layout/base-layout.component";
import Home from "../pages/Home/home.component";
import Conventional from "../pages/conventional/conventional.component";
import Fha from "../pages/fha/fha.component";
import FixedRate from "../pages/fixed-rate/fixed-rate.component";
import Jumbo from "../pages/jumbo/jumbo.component";
import Refinance from "../pages/refinance/refinance.component";
import Renovation from "../pages/renovation/renovation.component";
import Reverse from "../pages/reverse/reverse.component";
import Usda from "../pages/usda/usda.component";
import Va from "../pages/va/va.component";
import NotFound from "../pages/404.component";
import ContactUs from "../pages/contact/contact.component";
import AboutStrategicFinancial from "../pages/about-strategic-financial/about-strategic-financial.component";
import Blog from "../pages/blog/blog.component";
import Reviews from "../pages/reviews/reviews.component";
import Docs from "../pages/docs/docs.component";
import Calculator from "../pages/calculator/calculator.component";
import HomeValue from "../pages/home-value/home-value.component";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <BaseLayout>
              <Home />
            </BaseLayout>
          }
        />
        <Route
          path="/conventional"
          element={
            <BaseLayout>
              <Conventional />
            </BaseLayout>
          }
        />
        <Route
          path="/fha"
          element={
            <BaseLayout>
              <Fha />
            </BaseLayout>
          }
        />
        <Route
          path="/fixed-rate"
          element={
            <BaseLayout>
              <FixedRate />
            </BaseLayout>
          }
        />
        <Route
          path="/jumbo"
          element={
            <BaseLayout>
              <Jumbo />
            </BaseLayout>
          }
        />
        <Route
          path="/refinance"
          element={
            <BaseLayout>
              <Refinance />
            </BaseLayout>
          }
        />
        <Route
          path="/renovation"
          element={
            <BaseLayout>
              <Renovation />
            </BaseLayout>
          }
        />
        <Route
          path="/reverse"
          element={
            <BaseLayout>
              <Reverse />
            </BaseLayout>
          }
        />
        <Route
          path="/usda"
          element={
            <BaseLayout>
              <Usda />
            </BaseLayout>
          }
        />
        <Route
          path="/va"
          element={
            <BaseLayout>
              <Va />
            </BaseLayout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <BaseLayout>
              <ContactUs />
            </BaseLayout>
          }
        />
        <Route
          path="/about-strategic-financial"
          element={
            <BaseLayout>
              <AboutStrategicFinancial />
            </BaseLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <BaseLayout>
              <Blog />
            </BaseLayout>
          }
        />
        <Route
          path="/reviews"
          element={
            <BaseLayout>
              <Reviews />
            </BaseLayout>
          }
        />
        <Route
          path="/doc"
          element={
            <BaseLayout>
              <Docs />
            </BaseLayout>
          }
        />
        <Route
          path="/calculator"
          element={
            <BaseLayout>
              <Calculator />
            </BaseLayout>
          }
        />
        <Route
          path="/home-worth"
          element={
            <BaseLayout>
              <HomeValue />
            </BaseLayout>
          }
        />
        <Route
          path="*"
          element={
            <BaseLayout>
              <NotFound />
            </BaseLayout>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
