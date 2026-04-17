import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "@/features/dashboard/DashboardPage";
import { MainLayout } from "@/shared/components/layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
    ],
  },
]);