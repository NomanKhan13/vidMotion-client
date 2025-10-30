import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import AppLayout from "./ui/AppLayout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import VideoList from "./videos/VideoList";
import VideoPlayer from "./videos/VideoPlayerPage";
import ProfilePage from "./profile/ProfilePage";
import Studio from "./studio/studio";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: VideoList },
      { path: "watch", Component: VideoPlayer },
      { path: "profile/:username", Component: ProfilePage },
    ],
  },
  {
    path: "/auth",
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
  {
    path: "/studio",
    children: [
      { index: true, element: <Navigate to="channel-customization" replace /> },
      { path: ":section", Component: Studio },
      { path: "*", element: <Navigate to="channel-customization" replace /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
