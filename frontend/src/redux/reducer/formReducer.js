import {
  GET_STUDENT,
  ADD_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
  COMPLETED,
} from "../actionTypes/form";

const initialState = {
  form: [],
};
export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT:
      return {
        ...state,
        form: action.payload,
      };
    case ADD_STUDENT:
      return {
        ...state,
        form: [...state.form, action.payload],
      };
    case DELETE_STUDENT:
      return {
        ...state,
        form: state.form.filter((student) => student.id !== action.payload),
      };
    case EDIT_STUDENT:
      const { id, edit } = action.payload;
      return {
        ...state,
        form: state.form.map((student) => {
          if (student.id === id) {
            return {
              ...student,
              progress: edit,
            };
          }
          return student;
        }),
      };
    case COMPLETED:
      return state;
    default:
      return state;
  }
};
