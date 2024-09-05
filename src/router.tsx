import { createBrowserRouter } from "react-router-dom";

import { Root } from "@/routes/layouts/root";
import { PageNotFound } from "@/404-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
