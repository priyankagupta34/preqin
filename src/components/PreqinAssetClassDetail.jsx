import React from "react";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import DataTable from "../ui/DataTable";
import { Context } from "../reducer/Reducer";

const PreqinAssetClassDetail = () => {
  const { data } = useLoaderData();
  const {state: investor} = useLocation();
  const { investorId, assetClass } = useParams();
  const { state } = React.useContext(Context);

  const navigate = useNavigate();
  React.useEffect(() => {
    navigate(`/investors/${investorId}/assetclass/${assetClass}`, {state: investor});
  }, [investorId, assetClass]);

  return (
    <DataTable
      data={data}
      column={state.colsForAsset}
      rowClickAction={() => {}}
    />
  );
};

export default PreqinAssetClassDetail;
