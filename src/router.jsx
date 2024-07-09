import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layout/base-layout/BaseLayout";

const HomePage = lazy(() => import("./page/home/HomePage"));
const ChartPage = lazy(() => import("./page/chart/ChartPage"));
const RadioPage = lazy(() => import("./page/radio/RadioPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <BaseLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "zing-chart",
        element: <ChartPage />,
      },
      {
        path: "radio",
        element: <RadioPage />,
      },
    ],
  },
  {
    path: "about",
    element: <div>Admin</div>,
  },
]);
