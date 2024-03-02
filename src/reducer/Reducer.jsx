import Dashboard from "../Dashboard";
import React from "react";

const currentstate = {
  assetClassSet: [
    { value: "pe", label: "PE (Private Equity)" },
    { value: "pd", label: "PD (Private Debt)" },
    { value: "re", label: "RE (Real Estate)" },
    { value: "inf", label: "INF (Infrastructure)" },
    { value: "nr", label: "NR (Natural Resources)" },
    { value: "hf", label: "HF (Hedge Funds)" },
  ],
  colsForInvestors: [
    "firm_id",
    "firm_name",
    "firm_type",
    "date_added",
    "address",
  ],
  colsForAsset: ["id", "asset_class", "firm_id", "currency", "amount"],
};

const reducer = (state, action) => {
  if (action.type) {
    return { ...state, [action.type]: action.payload };
  }
  return state;
};
export const Context = React.createContext(undefined);
function DashboardDisplay() {
  const [state, dispatch] = React.useReducer(reducer, currentstate);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Dashboard />
    </Context.Provider>
  );
}

export default DashboardDisplay;
