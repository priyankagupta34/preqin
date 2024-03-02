import axios from "axios";

const getInvestors = async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/investors");
  return response;
};

const getCommitment = async (investorId, assetclass) => {
  const response =
    await axios.get(`http://127.0.0.1:8000/api/investor/commitment/${assetclass}/${investorId}
  `);
  return response;
};

export { getInvestors, getCommitment };
