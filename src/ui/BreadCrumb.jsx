import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

function BreadcrumbDetail({ investor }) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
      <Breadcrumb.Item active>Investor: {investor}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbDetail;
