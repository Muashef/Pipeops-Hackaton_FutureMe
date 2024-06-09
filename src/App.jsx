import "./App.css";
import "./style/styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Forgotpassword from "./pages/Auth/Forgotpassword";
import Dashboard from "./pages/Dashboard";
import Settings from "./components/Dashboard/Settings";;
import QuestionnairePage from "./pages/QuestionnairePage";

function App() {
  const router = createBrowserRouter([
    // { path: "/", element: <Home /> },
    { path: "/", element: <QuestionnairePage /> },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
    { path: "/forgot-password", element: <Forgotpassword /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/settings", element: <Settings />}
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
