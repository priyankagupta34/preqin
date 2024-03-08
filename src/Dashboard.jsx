import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import PreqinInvestorsDataTable from "./components/PreqinInvestorsDataTable";
import { getCommitment, getInvestors } from "./service/PrequinService";
import PreqinInvestorDetail from "./components/PreqinInvestorDetail";
import PreqinAssetClassDetail from "./components/PreqinAssetClassDetail";
import NotFound from "./ui/NotFound";

const Dashboard = () => {
  const router = createBrowserRouter([
    {
      element: <PreqinInvestorsDataTable />,
      path: "/",
      errorElement: <NotFound />,
      loader: async () => {
        const res = await getInvestors();
        return res;
      },
    },
    {
      element: <PreqinInvestorDetail />,
      path: "/investors/:investorId",
      errorElement: <NotFound />,
      children: [
        {
          element: <PreqinAssetClassDetail />,
          path: "/investors/:investorId/assetclass/:assetClass",
          errorElement: <NotFound />,
          loader: async ({ params }) => {
            const { investorId, assetClass } = params;
            const res = await getCommitment(investorId, assetClass);
            return res;
          },
        },
      ],
    },
  ]);
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};

export default Dashboard;
