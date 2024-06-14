import App from "./App";
import Profile from "./Cooking";
import ErrorPage from "./ErrorPage";
import Cooking from "./Cooking";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cooking",
    element: <Cooking />,
  },
  {
    path: "cooking/:name",
    element: <Cooking />,
  },
];

export default routes;
