import { createSlice } from "@reduxjs/toolkit";

const bins = [
  {
    id: 208,
    category: "trashPositive",
    latitude: "27.1390649",
    longitude: "49.5601328",
    bintype: "4 M",
    center_name: "SUDEER",
    route: "CTC-01",
    status: "empty",
    binType: "4 M",
    report: {
      is: false,
      status: null,
    },
    description: "SUD-00183",
    centerid: 32,
    routid: 96,
    bintypeid: 2,
    time: "2024-09-06",
  },
  {
    id: 209,
    category: "trashPositive",
    latitude: "27.138876441038942",
    longitude: "49.56002152943037",
    bintype: "4 M",
    center_name: "SUDEER",
    route: "CTC-01",
    status: "empty",
    binType: "4 M",
    report: {
      is: false,
      status: null,
    },
    description: "SUD-00184",
    centerid: 32,
    routid: 96,
    bintypeid: 2,
    time: "2024-09-06",
  },
  {
    id: 212,
    category: "trashPositive",
    latitude: "27.129537212615084",
    longitude: "49.56503664180296",
    bintype: "4 M",
    center_name: "SUDEER",
    route: "CTC-01",
    status: "empty",
    binType: "4 M",
    report: {
      is: false,
      status: null,
    },
    description: "SUD-00187",
    centerid: 32,
    routid: 96,
    bintypeid: 2,
    time: "2024-09-06",
  },
  {
    id: 213,
    category: "trashPositive",
    latitude: "27.1299338",
    longitude: "49.5648745",
    bintype: "4 M",
    center_name: "SUDEER",
    route: "CTC-01",
    status: "empty",
    binType: "4 M",
    report: {
      is: false,
      status: null,
    },
    description: "SUD-00188",
    centerid: 32,
    routid: 96,
    bintypeid: 2,
    time: "2024-09-06",
  },
];

interface TrackingState {
  bins: any[];
  filteredBins: any[];
}

const initialState: TrackingState = {
  bins: bins,
  filteredBins: bins,
};

const { reducer, actions } = createSlice({
  name: "tracking",
  initialState,
  reducers: {
    updateBins(state, action) {
      state.bins = action.payload;
      state.filteredBins = action.payload;
    },
  },
});

export { actions as trackingActions };
export { reducer as trackingReducer };
