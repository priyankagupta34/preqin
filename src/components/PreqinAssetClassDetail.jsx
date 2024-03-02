import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import DataTable from "../ui/DataTable";
import { Context } from "../reducer/Reducer";

const PreqinAssetClassDetail = () => {
  const { data } = useLoaderData();
  const { investorId, assetClass } = useParams();
  const {state} = React.useContext(Context);

  const navigate = useNavigate();
  React.useEffect(() => {
    navigate(`/investors/${investorId}/assetclass/${assetClass}`);
  }, [investorId, assetClass]);

  return (
    <div>
      <DataTable data={data} column={state.colsForAsset} rowClickAction={() => {}} />
    </div>
  );
};

export default PreqinAssetClassDetail;
