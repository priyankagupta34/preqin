import React from "react";
import Table from "react-bootstrap/Table";
import { capitalise } from "../utils";
import moment from "moment";
import PaginationComponent from "./PaginationComponent";

const DataTable = (props) => {
  const { data, column, rowClickAction, showPagination } = props;

  const [displayData, setDisplayData] = React.useState(data.slice(0, 5));

  const [active, setActive] = React.useState(1);

  React.useEffect(() => {
    setDisplayData(data.slice(0, 5));
    setActive(1);
  }, [data]);

  const changePage = (page) => {
    setDisplayData(data.slice((page - 1) * 5, (page - 1) * 5 + 5));
    setActive(page);
  };

  return (
    <>
      <Table striped bordered hover data-testid="dataTable_main">
        <thead data-testid="dataTable_head">
          <tr>
            {column.map((col) => (
              <th>{capitalise(col)}</th>
            ))}
          </tr>
        </thead>
        <tbody data-testid="dataTable_body">
          {displayData.map((investor) => (
            <tr
              role="row"
              onClick={() => rowClickAction(investor)}
              style={{ cursor: "pointer" }}
            >
              {column.map((col) => (
                <td>
                  {col === "date_added"
                    ? moment(investor.date_added).format("MM-DD-YYYY")
                    : investor[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      {showPagination && <PaginationComponent
        start={1}
        to={Math.ceil(data.length / 5)}
        active={active}
        changePage={changePage}
      />}
    </>
  );
};

export default DataTable;
