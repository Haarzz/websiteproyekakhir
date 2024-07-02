import React, { useState, useEffect } from "react";
import axios from "axios";
import EditForm from "./UpdateDataForm";

export default function Admin() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState<any | null>(null); // State to store selected item for update
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/datadehidrasi');
      setData(response.data);
    } catch (error) {
      console.error("Error Fetching Data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateClick = (item: any) => {
    setSelectedItem(item); // Set selected item to show modal
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/datadehidrasi/${id}`);
      console.log(`Deleted data with id ${id}`);
      // Update state or re-fetch data if needed
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
      // Handle error as needed
    }
  };
  const handleUpdateSuccess = () => {
    // Refresh data or update state after successful update
    axios.get('http://localhost:3000/datadehidrasi')
      .then(response => {
        setData(response.data);
        setSelectedItem(null); // Reset selected item after update
      })
      .catch(err => {
        console.log("Error Fetching Data", err);
      });
  };

  return (
    <>
      <h1 className="fw-bold text-center text-light">Admin Page</h1>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Tempat Tanggal Lahir</th>
            <th scope="col">Status Dehidrasi</th>
            <th scope="col">Tanggal Pengecekan</th>
            <th scope="col">Update Data</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.nama_pasien}</td>
              <td>{item.ttl_pasien}</td>
              <td>{item.tingkat_dehidrasi}</td>
              <td>{item.scan_history}</td>
              <td className=""><a className="btn btn-secondary" onClick={() => handleUpdateClick(item)}>Update</a></td>
              <td><button className="btn btn-secondary" onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for UpdateForm */}
      <div className={`modal ${selectedItem ? 'show' : ''}`} tabIndex={-1} role="dialog" style={{ display: selectedItem ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Data Pasien</h5>
              <button type="button" className="close" onClick={() => setSelectedItem(null)} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {selectedItem && (
                <EditForm initialData={selectedItem} onUpdateSuccess={handleUpdateSuccess} />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Modal backdrop */}
      <div className={`modal-backdrop fade ${selectedItem ? 'show' : ''}`} style={{ display: selectedItem ? 'block' : 'none' }}></div>
    </>
  );
}
