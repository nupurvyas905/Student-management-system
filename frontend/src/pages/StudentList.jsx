import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth/authService";

const PAGE_SIZE = 10;

function StudentList() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  const loadStudents = async (p = 0) => {
    const res = await api.get(`/api/students?page=${p}&size=${PAGE_SIZE}`);
    setStudents(res.data.content);
    setTotalPages(res.data.totalPages);
    setPage(res.data.number);
  };

  useEffect(() => {
    loadStudents(0);
  }, []);

  const deleteStudent = async (id) => {
    if (!window.confirm("Delete this student?")) return;
    await api.delete(`/api/students/${id}`);
    loadStudents(page);
  };

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between mb-3">
        <h3>Students List</h3>
        <div>
          <button
            className="btn btn-success me-2"
            onClick={() => navigate("/students/add")}
          >
            Add Student
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th width="160">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={s.id}>
              {/* SERIAL NUMBER */}
              <td>{page * PAGE_SIZE + index + 1}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.course}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => navigate(`/students/edit/${s.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteStudent(s.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <nav className="d-flex justify-content-center mt-3">
        <ul className="pagination">
          {/* Previous */}
          <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => loadStudents(page - 1)}
              disabled={page === 0}
            >
              Previous
            </button>
          </li>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => (
            <li key={i} className={`page-item ${i === page ? "active" : ""}`}>
              <button className="page-link" onClick={() => loadStudents(i)}>
                {i + 1}
              </button>
            </li>
          ))}

          {/* Next */}
          <li
            className={`page-item ${page === totalPages - 1 ? "disabled" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => loadStudents(page + 1)}
              disabled={page === totalPages - 1}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default StudentList;
