import { useLoaderData, useNavigate } from "react-router-dom";
import React from "react";

import DataTable from "../ui/DataTable";
import { Context } from "../reducer/Reducer";

const PreqinInvestorsDataTable = () => {
  const { data } = useLoaderData();
  const navigate = useNavigate();

  const { state } = React.useContext(Context);

  return (
    <DataTable
      data={data}
      column={state.colsForInvestors}
      rowClickAction={(firm_id) => navigate(`/investors/${firm_id}`)}
    />
  );
};

export default PreqinInvestorsDataTable;