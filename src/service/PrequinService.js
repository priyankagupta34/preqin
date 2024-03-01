import axios from "axios";

const getInvestors = () => {
  const response = axios.get("http://127.0.0.1:8000/api/investors");
  response.then((res) => res).catch((err) => err);
};

const getCommitment = (assetClass, investorId) => {
  const response = axios.get("http://127.0.0.1:8000/api/investors");
  response.then((res) => res).catch((err) => err);
};

export { getInvestors, getCommitment };
