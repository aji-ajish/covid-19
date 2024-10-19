import { createSlice } from "@reduxjs/toolkit";

const casesSlice = createSlice({
  name: "covidCases",
  initialState: {
    loading: true,
  },
  reducers: {
    totalCasesRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    totalCasesSuccess(state, action) {
      return {
        ...state,
        loading: false,
        totalCount: action.payload,
      };
    },
    totalCasesFail(state, action) {
      return {
        ...state,
        loading: false,
        error: "error",
      };
    },
    stateCasesRequest(state, action) {
      return {
        ...state,
        loading: false,
      };
    },
    stateCasesSuccess(state, action) {
      return {
        ...state,
        loading: false,
        stateCount: action.payload,
      };
    },
    stateCasesFail(state, action) {
      return {
        ...state,
        loading: false,
        error: "error",
      };
    },
    stateListRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    stateListSuccess(state, action) {
      return {
        ...state,
        loading: false,
        stateLists: action.payload,
      };
    },
    stateListFail(state, action) {
      return {
        ...state,
        loading: false,
        error: "error",
      };
    },
  },
});

export const {
  totalCasesRequest,
  totalCasesSuccess,
  totalCasesFail,
  stateCasesRequest,
  stateCasesSuccess,
  stateCasesFail,
  stateListRequest,
  stateListSuccess,
  stateListFail,
} = casesSlice.actions;
export default casesSlice.reducer;
