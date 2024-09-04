import { createSlice } from "@reduxjs/toolkit";
interface Violation {
  id: string;
  latitude: number;
  longitude: number;
  category: "pole" | "waste" | "scattered" | "dust";
  title: string;
  type: "pole" | "waste" | "scattered" | "dust";
  processed: boolean;
}
const violations: Violation[] = [
  {
    id: "82888204",
    latitude: 27.0674,
    longitude: 49.604185,
    category: "pole",
    title: "Pole",
    type: "pole",
    processed: true,
  },
  {
    id: "82888205",
    latitude: 27.0374,
    longitude: 49.544185,
    category: "waste",
    title: "Waste",
    type: "waste",
    processed: false,
  },
  {
    id: "82888206",
    latitude: 27.0574,
    longitude: 49.404185,
    category: "dust",
    title: "Dust",
    type: "dust",
    processed: true,
  },
  {
    id: "82888207",
    latitude: 27.0974,
    longitude: 49.554185,
    category: "scattered",
    title: "Scattered",
    type: "scattered",
    processed: true,
  },
  {
    id: "82888208",
    latitude: 27.0974,
    longitude: 49.504185,
    category: "scattered",
    title: "Scattered",
    type: "scattered",
    processed: false,
  },
];

interface ViolationsState {
  items: Violation[];
  filteredViolations: Violation[];
}

const initialState: ViolationsState = {
  items: violations,
  filteredViolations: violations,
};

const { reducer, actions } = createSlice({
  name: "violations",
  initialState,
  reducers: {
    updateViolations(state, action) {
      state.items = action.payload;
    },
    updateFilteredViolations(state, action) {
      state.filteredViolations = action.payload;
    },
  },
});

export { actions as violationsActions };
export { reducer as violationsReducer };
