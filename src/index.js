import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./tailwind.css";
// import App from "./App"; //App컴포넌트를 안쓰고 최신문법인지 모르겠으나 router 컴포넌트를 만들어서 한다
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//router
import Main from "./page/Main";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Main />}></Route>)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
