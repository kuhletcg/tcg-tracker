import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent } from "../redux/actions/form";
import { Table } from "reactstrap";
import EditCodewars from "./EditCodewars";

function StudentProgress() {
  const students = useSelector((state) => state.form.form);

  const dispatch = useDispatch();

  const [isEditable, setIsEditable] = useState(false);

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
            <th>FreeCodeCamp</th>
            <th>Typing</th>
            <th>CodeWars</th>
            <th>BlogPost</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 &&
            students.map((student) => {
              const { id, freecodecamp, typing, codewars, blogpost } = student;

              return (
                <tr>
                  <td>{freecodecamp}</td>
                  <td>{typing}</td>
                  <td>{codewars}</td>
                  <td>{blogpost}</td>

                  <td>
                    {isEditable ? codewars : <EditCodewars {...student} />}
                  </td>
                  {
                    <div className="display-button">
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
