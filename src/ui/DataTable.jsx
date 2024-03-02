import React from "react";
import Table from "react-bootstrap/Table";
import { capitalise } from "../utils";
import moment from "moment";

const DataTable = (props) => {
  const { data, column, rowClickAction } = props;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {column.map((col) => (
            <th>{capitalise(col)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((investor) => (
          <tr
            onClick={() => rowClickAction(investor.firm_id)}
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
  );
};

export default DataTable;
