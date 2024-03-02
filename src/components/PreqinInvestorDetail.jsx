import React, { useContext } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import BreadcrumbDetail from "../ui/BreadCrumb";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Context } from "../reducer/Reducer";

const PreqinInvestorDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { investorId, assetClass } = params;

  React.useEffect(() => {
    if (investorId && assetClass) {
      navigate(`/investors/${investorId}/assetclass/${assetClass}`);
    } else if (investorId) navigate(`/investors/${investorId}`);
  }, [investorId, assetClass]);
  const { state } = useContext(Context);
  const { assetClassSet } = state;
  return (
    <div>
      <BreadcrumbDetail investor={investorId} />
      <Form.Select
        aria-label="Default select example"
        onChange={(e) =>
          e.target.value !== "null" &&
          navigate(`/investors/${investorId}/assetclass/${e.target.value}`)
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
