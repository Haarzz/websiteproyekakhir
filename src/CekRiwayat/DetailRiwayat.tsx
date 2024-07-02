import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  const options = {
    year: "numeric" as const,
    month: "long" as const,
    day: "numeric" as const,
    hour: "numeric" as const,
    minute: "2-digit" as const,
    hour12: true,
  };
  const locale = "id-ID";
  return date.toLocaleDateString(locale, options).replace("pukul", ",");
}
const DetailRiwayat = () => {
  const { id } = useParams(); // Fetching the id from URL params
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/datadehidrasi/${id}`) // Adjust the URL endpoint accordingly
      .then((response) => {
        setDetailData(response.data);
      })
      .catch((err) => {
        console.log("Error Fetching Detail Data", err);
      });
  }, [id]); // Re-run effect when id changes

  if (!detailData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card bg-secondary">
              <div className="card-body text-light">
                <h1 className="card-title fw-bold text-center text-light mb-4">
                  Detail Riwayat
                </h1>
                <h5 className="card-text">Nama : {detailData.nama_pasien}</h5>
                <p className="card-text">TTL : {detailData.ttl_pasien}</p>
                <p className="card-text">
                  Status Dehidrasi: {detailData.tingkat_dehidrasi}
                </p>
                <div className="row">
                  <div className="col-6">
                  <p className="card-text">Warna Urine</p>
                  </div>
                  <div className="col-6">
                  Kadar Amonia Pada Urine 
                  </div>
                </div>
                <p className="card-text">
                  <div className="row">
                    <div className="col-6">
                      R : {detailData.tcs_red} <br></br>
                      G : {detailData.tcs_green} <br></br>
                      B : {detailData.tcs_blue}
                    </div>
                    <div className="col-6">
                      NH3 : {detailData.mq_ppm}
                    </div>
                  </div>
                </p>
                <p className="card-text text-center">
                  <div className="fw-bold">Tanggal Pengecekan: </div>{formatDate(detailData.scan_history)}
                  <br></br><a className="btn btn-danger mt-3" href="/cekriwayat"> Back</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailRiwayat;
