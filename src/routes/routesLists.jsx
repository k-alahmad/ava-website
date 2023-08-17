import { lazy } from "react";
export const publicRoutes = [
  { path: "/", element: lazy(() => import("../pages/home/index.jsx")) },
  {
    path: "/about-us",
    element: lazy(() => import("../pages/aboutUs/index.jsx")),
  },
  {
    path: "/jobs",
    element: lazy(() => import("../pages/JobApplication/index.jsx")),
  },
  {
    path: "/privacy-policy",
    element: lazy(() => import("../pages/privacy/index.jsx")),
  },
  {
    path: "*",
    element: lazy(() => import("../components/UI/404NotFound/index.jsx")),
  },
];

export const protectedRoutes = [];
