import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ marginTop: 20 }}>
      {`<Error> Not found`}! <Link to="/">Back to item list</Link>
    </div>
  );
};

export default NotFound;
