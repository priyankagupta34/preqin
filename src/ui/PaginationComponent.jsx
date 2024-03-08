import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = ({ start, to, active, changePage }) => {
  let items = [];
  for (let number = start; number <= to; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => changePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "row-reverse" }}
      data-testid="pagination"
    >
      {" "}
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
};

export default PaginationComponent;
