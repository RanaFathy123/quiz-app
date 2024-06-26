import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./modules/SharedModules/components/AuthLayout/AuthLayout";
import Login from "./modules/authModule/components/Login/Login";
import NotFound from "./modules/StudentsModule/components/NotFound/NotFound";
import SignUp from "./modules/authModule/components/SignUp/SignUp";
import ForgetPass from "./modules/authModule/components/ForgetPass/ForgetPass";
import ResetPass from "./modules/authModule/components/ResetPass/ResetPass";
import ChangePass from "./modules/authModule/components/ChangePass/ChangePass";
import MasterLayout from "./modules/SharedModules/components/MasterLayout/MasterLayout";

import GroupsList from "./modules/GroupsModule/components/GroupsList/GroupsList";
import Dashboard from "./modules/DashboardModule/components/Dashboard";
import GroupData from "./modules/GroupsModule/components/GroupData/GroupData";

const App: React.FC = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "forget-password",
          element: <ForgetPass />,
        },
        {
          path: "reset-password",
          element: <ResetPass />,
        },
        {
          path: "change-password",
          element: <ChangePass />,
        },
      ],
    },
    {
      path:'/dashboard',
      element:<MasterLayout/>,
      errorElement:<NotFound/>,
      children:[
        {
          path:'',
          element:<Dashboard/>
        },
        {
          path:'groups',
          element:<GroupsList/>,
        },
        {
          path:'groups-data',
          element:<GroupData/>
        }
      ]
    }
  ]);

  return <div>
    <RouterProvider router={routes}/>
  </div>;
};

export default App;
