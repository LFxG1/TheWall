import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FindFriendsGet } from "./screens/FindFriendsGet";
import { FirstPage } from "./screens/FirstPage";
import { HangoutWithWith } from "./screens/HangoutWithWith";
import { Home } from "./screens/Home";
import { MeetAwesomePeople } from "./screens/MeetAwesomePeople";
import { SignIn } from "./screens/SignIn";
import { SignUp } from "./screens/SignUp";
import { Wall } from "./screens/Wall";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Wall />,
  },
  {
    path: "/wall",
    element: <Wall />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/first-page",
    element: <FirstPage />,
  },
  {
    path: "/hangout-with-with-friends",
    element: <HangoutWithWith />,
  },
  {
    path: "/find-friends-u38-get-inspiration",
    element: <FindFriendsGet />,
  },
  {
    path: "/meet-awesome-people-u38-enjoy-yourself",
    element: <MeetAwesomePeople />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
