import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { completed, deleteStudent, getStudent } from "../redux/actions/form";
import { Table } from "reactstrap";
import EditCodewars from "./EditCodewars";

function StudentProgress() {
  const students = useSelector((state) => state.form.form);

  const dispatch = useDispatch();

  const [isEditable, setIsEditable] = useState(false);

  const completeAndGetStudents = (id) => {
    dispatch(completed(id));
    dispatch(getStudent());
  };
  const openEditForm = (id) => {
    return students.find((student) => {
      if (student.id === id) {
        setIsEditable(!isEditable);
      }
      return student;
    });
  };
  return (
    <div className="display-table">
      <Table dark>
        <thead>
          <tr>
            <th>freeCodeCamp</th>
            <th>typing</th>
            <th>codeWars</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 &&
            students.map((student) => {
              const { id, freecodecamp, typing, codewars, isCompleted } =
                student;

              return (
                <tr key={id} className={`${isCompleted ? "complete" : ""} `}>
                  <td>{freecodecamp}</td>
                  <td>{typing}</td>
                  <td>{codewars}</td>
                  <td>
                    {isEditable ? codewars : <EditCodewars {...student} />}
                  </td>
                  {
                    <div className="display-button">
                      <div>
                        <button onClick={() => completeAndGetStudents(id)}>
                          Complete
                        </button>
                      </div>
                      <div>
                        <button onClick={() => openEditForm(id)}>Edit</button>

                        <button onClick={() => dispatch(deleteStudent(id))}>
                          Delete
                        </button>
                      </div>
                    </div>
                  }
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default StudentProgress;