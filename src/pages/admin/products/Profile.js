import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4"> LIST REGISTERED</h2>

      <div className="row mb-3">
        <div className="col">
          <Link
            className="btn btn-primary me-1"
            to="/admin/products/createuser"
            role="button"
          >
            Create User
          </Link>
          <button type="button" className="btn btn-outline-primary">
            Refresh
          </button>
        </div>
        <div className="col"></div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID NO.</th>
            <th>EMAIL</th>
            <th>NAME</th>
            <th>PASSWORD</th>
            <th>ROLE</th>
            <th>DATE CREATED</th>
            <th>AVATAR</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>{item.password}</td>
                <td>{item.role}</td>
                <td>{item.creationAt.slice(0, 10)}</td>
                <td>
                  <img src={item.avatar} width="80" alt="" />
                </td>

                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                  <a
                    className="btn btn-primary btn-sm me-1"
                    href="/admin/products/edit/"
                  >
                    Edit
                  </a>

                  <button type="button" className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
