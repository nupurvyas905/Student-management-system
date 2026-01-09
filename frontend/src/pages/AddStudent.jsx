import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
  });

  const navigate = useNavigate();

  const save = async () => {
    await api.post("/api/students", student);
    navigate("/students");
  };

  return (
    <div className="container mt-4 col-md-4">
      <h3>Add Student</h3>

      <input
        className="form-control mb-2"
        placeholder="Name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />

      <input
        className="form-control mb-2"
        placeholder="Age"
        type="number"
        min="0"
        value={student.age}
        onChange={(e) => setStudent({ ...student, age: e.target.value })}
      />

      <input
        className="form-control mb-3"
        placeholder="Course"
        value={student.course}
        onChange={(e) => setStudent({ ...student, course: e.target.value })}
      />

      <div className="d-flex justify-content-between">
        <button className="btn btn-success" onClick={save}>
          Save
        </button>
        <button className="btn btn-secondary" onClick={() => navigate("/students")}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddStudent;
