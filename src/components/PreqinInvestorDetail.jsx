import React, { useContext } from "react";
import BreadcrumbDetail from "../ui/BreadCrumb";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Context } from "../reducer/Reducer";
import DataTable from "../ui/DataTable";

const PreqinInvestorDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { state: investor } = useLocation();
  const { investorId } = params;

  const { state } = useContext(Context);
  const { assetClassSet, colsForInvestors } = state;

  return (
    <>
      <BreadcrumbDetail investor={investorId} />
      <DataTable
        data={[investor]}
        column={colsForInvestors}
        rowClickAction={() => {}}
      />
      <Form.Select
        aria-label="Default select example"
        onChange={(e) =>
          e.target.value !== "null" &&
          navigate(`/investors/${investorId}/assetclass/${e.target.value}`, {
            state: investor,
          })
        }
      >
        <option value="null">Open this select menu</option>
        {assetClassSet.map(({ value, label }) => (
          <option value={value}>{label}</option>
        ))}
      </Form.Select>
      <Outlet />
    </>
  );
};

export default PreqinInvestorDetail;
