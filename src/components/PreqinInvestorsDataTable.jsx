import { useLoaderData, useNavigate } from "react-router-dom";
import React from "react";

import DataTable from "../ui/DataTable";
import { Context } from "../reducer/Reducer";

const PreqinInvestorsDataTable = () => {
  const { data } = useLoaderData();
  const navigate = useNavigate();

  const { state } = React.useContext(Context);

  return (
    <>
      <small><b>Click rows to find out more</b></small>
      <DataTable
        data={data}
        showPagination
        column={state.colsForInvestors}
        rowClickAction={(investor) =>
          navigate(`/investors/${investor.firm_id}`, { state: investor })
        }
      />
    </>
  );
};

export default PreqinInvestorsDataTable;
