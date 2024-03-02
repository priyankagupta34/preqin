import React from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import DataTable from "../ui/DataTable";
import { Context } from "../reducer/Reducer";
import PaginationComponent from "../ui/PaginationComponent";

const PreqinAssetClassDetail = () => {
  const { data } = useLoaderData();
  const [displayData, setDisplayData] = React.useState(data.slice(0, 5));
  const { state: investor } = useLocation();
  const { investorId, assetClass } = useParams();
  const { state } = React.useContext(Context);

  const [active, setActive] = React.useState(1);
  const navigate = useNavigate();
  React.useEffect(() => {
    setDisplayData(data.slice(0, 5));
    setActive(1);
  }, [data]);
  React.useEffect(() => {
    navigate(`/investors/${investorId}/assetclass/${assetClass}`, {
      state: investor,
    });
  }, [investorId, assetClass]);
  const changePage = (page) => {
    setDisplayData(data.slice((page - 1) * 5, (page - 1) * 5 + 5));
    setActive(page);
  };
  return (
    <>
      <DataTable
        data={displayData}
        column={state.colsForAsset}
        rowClickAction={() => {}}
      />
      <PaginationComponent
        start={1}
        to={Math.ceil(data.length / 5)}
        active={active}
        changePage={changePage}
      />
    </>
  );
};

export default PreqinAssetClassDetail;
