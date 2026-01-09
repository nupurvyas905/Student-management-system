import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
  });

  useEffect(() => {
    api.get(`/api/students?page=0&size=100`).then((res) => {
      const found = res.data.content.find((s) => s.id === Number(id));
      if (found) setStudent(found);
    });
  }, [id]);

  const update = async () => {
    await api.put(`/api/students/${id}`, student);
    navigate("/students");
  };

  return (
    <div className="container mt-4 col-md-4">
      <h3>Edit Student</h3>

      <input
        className="form-control mb-2"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />

      <input
        className="form-control mb-2"
        type="number"
        min="0"
        value={student.age}
        onChange={(e) => setStudent({ ...student, age: e.target.value })}
      />

      <input
        className="form-control mb-3"
        value={student.course}
        onChange={(e) => setStudent({ ...student, course: e.target.value })}
      />

      <div className="d-flex justify-content-between">
        <button className="btn btn-warning" onClick={update}>
          Update
        </button>
        <button className="btn btn-secondary" onClick={() => navigate("/students")}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditStudent;
