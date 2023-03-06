import { createBrowserRouter } from "react-router-dom";
import TkModal from "../components/TkModal/TkModal";
import UserHome from "../components/UserHome/UserHome";
import Home from "../page/Home/Home";
import Profile from "../page/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <UserHome />,
  },
  {
    path: "/:id",
    element: <Profile />,
  },
  {
    path: "/modal",
    element: <TkModal />,
  },
]);
export default router;
