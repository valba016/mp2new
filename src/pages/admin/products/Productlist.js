import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Productlist() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4"> Products </h2>

      <div className="row mb-3">
        <div className="col">
          <Link
            className="btn btn-primary me-1"
            to="/admin/products/create"
            role="button"
          >
            Create Product
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
            <th>ITEM NO.</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>IMAGE</th>
            <th>PRICE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title.slice(0, 10)}</td>
                <td>{item.category}</td>
                <td>
                  <img src={item.image} width="100" alt="" />
                </td>
                <td>{item.price} PHP</td>

                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                  <Link className="btn btn-primary btn-sm me-1" to="/">
                    Edit
                  </Link>
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
