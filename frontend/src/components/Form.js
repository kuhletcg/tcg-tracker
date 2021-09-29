import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStudent, getStudent } from "../redux/actions/form";

function Form() {
  const [formInfo, setFormInfo] = useState({
    freecodecamp: "",
    codewars: "",
    typing: "",
    isCompleted: false,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudent());
  }, [dispatch, formInfo]);
  const { freecodecamp, codewars, typing } = formInfo;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    const { freecodecamp, codewars, typing } = formInfo;
    e.preventDefault();

    if ((freecodecamp, codewars, typing)) {
      dispatch(addStudent(formInfo));
      console.log("formInfo", formInfo);
      setFormInfo({
        ...formInfo,
        freecodecamp: "",
        codewars: "",
        typing: "",
      });
    }
  };
  return (
    <div className="student-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="freecodecamp">Freecodecamp</label>
        <input
          type="text"
          name="freecodecamp"
          id="freecodecamp"
          onChange={handleChange}
          value={freecodecamp}
          placeholder="Enter freecodecamp"
          required
        />
        <label htmlFor="codewars">Codewars</label>
        <input
          type="text"
          name="codewars"
          id="codewars"
          placeholder="Enter code wars"
          onChange={handleChange}
          value={codewars}
          required
        />
        <label htmlFor="">Typing</label>
        <input
          type="text"
          name="typing"
          id="typing"
          onChange={handleChange}
          placeholder="Enter your typing WPM"
          value={typing}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
