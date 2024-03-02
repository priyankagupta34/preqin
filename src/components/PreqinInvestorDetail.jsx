import React, { useContext } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import BreadcrumbDetail from "../ui/BreadCrumb";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Context } from "../reducer/Reducer";
import DataTable from "../ui/DataTable";

const PreqinInvestorDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { state: investor } = useLocation();
  const { investorId, assetClass } = params;

  React.useEffect(() => {
    if (investorId && assetClass) {
      navigate(`/investors/${investorId}/assetclass/${assetClass}`, {
        state: investor,
      });
    } else if (investorId)
      navigate(`/investors/${investorId}`, { state: investor });
  }, [investorId, assetClass]);
  const { state } = useContext(Context);
  const { assetClassSet, colsForInvestors } = state;

  return (
    <div>
      <BreadcrumbDetail investor={investorId} />
      <div>
        <DataTable
          data={[investor]}
          column={colsForInvestors}
          rowClickAction={() => {}}
        />
      </div>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) =>
          e.target.value !== "null" &&
          navigate(`/investors/${investorId}/assetclass/${e.target.value}`, {state: investor})
        }
      >
        <option value="null">Open this select menu</option>
        {assetClassSet.map(({ value, label }) => (
          <option value={value}>{label}</option>
        ))}
      </Form.Select>
      <Outlet />
    </div>
  );
};

export default PreqinInvestorDetail;
