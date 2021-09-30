import axios from "axios";
import {
  ADD_STUDENT,
  COMPLETED,
  DELETE_STUDENT,
  EDIT_STUDENT,
  GET_STUDENT,
} from "../actionTypes/form";

export const getStudent = () => {
  return (dispatch) => {
    axios.get("http://localhost:4500/api/student").then((res) => {
      console.log("get", res.data);
      dispatch({
        type: GET_STUDENT,
        payload: res.data,
      });
    });
  };
};

export const addStudent = (form) => {
  return (dispatch) => {
    axios.post("http://localhost:4500/api/student", { form }).then((res) => {
      dispatch({
        type: ADD_STUDENT,
        payload: res.data,
      });
    });
  };
};

export const deleteStudent = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:4500/api/student/${id}`).then((res) => {
      dispatch({
        type: DELETE_STUDENT,
        payload: id,
      });
    });
  };
};
export const editStudent = (obj) => {
  const { id, edit } = obj;
  return (dispatch) => {
    axios
      .put(`http://localhost:4500/api/student/${id}`, { edit })
      .then((res) => {
        dispatch({
          type: EDIT_STUDENT,
          payload: obj,
        });
      });
  };
};
export const completed = (id) => {
  console.log("complete", id);
  return (dispatch) => {
    axios
      .put(`http://localhost:4500/api/student/complete/${id}`)
      .then((res) => {
        dispatch({
          type: COMPLETED,
        });
      });
  };
};
