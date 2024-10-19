import axios from "axios";
import { stateCasesFail, stateCasesRequest, stateCasesSuccess, stateListFail, stateListRequest, stateListSuccess, totalCasesFail, totalCasesRequest, totalCasesSuccess } from "../slice/casesSlice";

export const totalCases = () => async (dispatch) => {
  try {
    dispatch(totalCasesRequest())
    const { data } = await axios.get(`http://localhost:3000/totalCases`);
    dispatch(totalCasesSuccess(data))
  } catch (error) {
    dispatch(totalCasesFail(error))
  }
};

export const stateCases = (id) => async (dispatch) => {
  try {
    dispatch(stateCasesRequest())
    const { data } = await axios.get(`http://localhost:3000/states/${id}`);
    dispatch(stateCasesSuccess(data))
  } catch (error) {
    dispatch(stateCasesFail(error))
  }
};

export const stateList = () => async (dispatch) => {
  try {
    dispatch(stateListRequest())
    const { data } = await axios.get(`http://localhost:3000/states`);
    dispatch(stateListSuccess(data))
  } catch (error) {
    dispatch(stateListFail(error))
  }
};