import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const locale = "id-ID";
  return date.toLocaleDateString(locale, options).replace("pukul", "");
}

const Riwayat = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState({ field: "", order: "asc" });

  useEffect(() => {
    axios
      .get("http://localhost:3000/datadehidrasi")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log("Error Fetching Data", err);
      });
  }, []);

  const sortByField = (field) => {
    const order = sortBy.field === field && sortBy.order === "asc" ? "desc" : "asc";
    setData([...data].sort((a, b) => {
      if (order === "asc") {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    }));
    setSortBy({ field, order });
  };

  return (
    <>
      <h1 className="fw-bold text-center text-light">RIWAYAT</h1>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col" onClick={() => sortByField("nama_pasien")} style={{ cursor: "pointer" }}>
              Nama
              {sortBy.field === "nama_pasien" && (
                <i className={`bi bi-arrow-${sortBy.order === "asc" ? "down" : "up"}`} />
              )}
            </th>
            <th scope="col" onClick={() => sortByField("ttl_pasien")} style={{ cursor: "pointer" }}>
              Tempat Tanggal Lahir
              {sortBy.field === "ttl_pasien" && (
                <i className={`bi bi-arrow-${sortBy.order === "asc" ? "down" : "up"}`} />
              )}
            </th>
            <th scope="col" onClick={() => sortByField("tingkat_dehidrasi")} style={{ cursor: "pointer" }}>
              Status Dehidrasi
              {sortBy.field === "tingkat_dehidrasi" && (
                <i className={`bi bi-arrow-${sortBy.order === "asc" ? "down" : "up"}`} />
              )}
            </th>
            <th scope="col" onClick={() => sortByField("scan_history")} style={{ cursor: "pointer" }}>
              Tanggal Pengecekan
              {sortBy.field === "scan_history" && (
                <i className={`bi bi-arrow-${sortBy.order === "asc" ? "down" : "up"}`} />
              )}
            </th>
            <th scope="col">Detail</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.nama_pasien}</td>
              <td>{item.ttl_pasien}</td>
              <td>{item.tingkat_dehidrasi}</td>
              <td>{formatDate(item.scan_history)}</td>
              <td>
                <Link
                  to={`/detailriwayat/${item.id}`}
                  className="btn btn-secondary"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Riwayat;
