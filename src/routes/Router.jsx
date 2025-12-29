import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Loader from "../components/ui/Loader/Loader";
import ErrorBoundaryWrapper from "./ErrorBoundary";
import RouteLoader from "./RouteLoader";

/* Lazy Pages */
const HomePage = lazy(() => import("../Pages/Home/HomePage"));
const ContactPage = lazy(() => import("../Pages/Contact/ContactPage"));
const ReturnPage = lazy(() => import("../Pages/Returns/ReturnPage"));
const PrivacyPage = lazy(() => import("../Pages/Privacy/PrivacyPage"));
const TermsPage = lazy(() => import("../Pages/Terms/TermPage"));
const NotFoundPage = lazy(() => import("../Pages/NotFound/NotFoundPage"));

export default function RouterApp() {
    return (
        <ErrorBoundaryWrapper>
            <Suspense fallback={<Loader />}>
                <RouteLoader>
                    <Routes>
                        {/* Layout */}
                        <Route element={<MainLayout />}>
                            <Route index element={<HomePage />} />
                            <Route path="contact" element={<ContactPage />} />
                            <Route path="returns" element={<ReturnPage />} />
                            <Route path="privacy" element={<PrivacyPage />} />
                            <Route path="terms" element={<TermsPage />} />
                        </Route>

                        {/* 404 */}
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </RouteLoader>
            </Suspense>
        </ErrorBoundaryWrapper>
    );
}
