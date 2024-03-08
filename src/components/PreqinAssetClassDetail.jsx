import React from "react";
import { useLoaderData } from "react-router-dom";
import DataTable from "../ui/DataTable";
import { Context } from "../reducer/Reducer";

const PreqinAssetClassDetail = () => {
  const { data } = useLoaderData();

  const { state } = React.useContext(Context);

  return (
    <DataTable
      showPagination
      data={data}
      column={state.colsForAsset}
      rowClickAction={() => {}}
    />
  );
};

export default PreqinAssetClassDetail;
