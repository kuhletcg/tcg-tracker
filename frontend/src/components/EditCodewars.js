import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editStudent } from "../redux/actions/form";

function EditCodewars({ id, codewars }) {
  const [edit, setEdit] = useState(codewars);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editStudent({ id, edit }));
  };

  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          type="text"
          name="edit"
          onChange={(e) => setEdit(e.target.value)}
          value={edit}
        />
        <button type="submit">update</button>
      </form>
    </div>
  );
}

export default EditCodewars;
