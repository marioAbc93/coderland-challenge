import MainLayout from "./layouts/mainLayout";
import { Home, List, Tasks } from "./views";

export default [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/list", element: <List /> },
      { path: "/task", element: <Tasks /> },
    ],
  },
];
