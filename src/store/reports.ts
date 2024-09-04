import { createSlice } from "@reduxjs/toolkit";

interface ReportsState {
  kpis: { [key: string]: number };
  reports: {
    zones: {};
    types: {};
  };
}

const initialState: ReportsState = {
  kpis: {
    "27/08": 23,
    "28/08": 2,
    "29/08": 5,
    "30/08": 10,
    "31/08": 15,
    "01/09": 1,
    "02/09": 5,
    "03/09": 3,
    "04/09": 7,
  },
  reports: {
    zones: {},
    types: {},
  },
};

const { reducer, actions } = createSlice({
  name: "reports",
  initialState,
  reducers: {},
});

export { actions as reportsActions };
export { reducer as reportsReducer };
