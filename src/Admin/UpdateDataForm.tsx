import React, { useState } from "react";
import axios from "axios";

interface UpdateDataFormProps {
  initialData: {
    id: number;
    nama_pasien: string;
    ttl_pasien: string;
  };
  onUpdateSuccess: () => void;
}

const UpdateDataForm: React.FC<UpdateDataFormProps> = ({ initialData, onUpdateSuccess }) => {
  const [namaPasien, setNamaPasien] = useState(initialData.nama_pasien);
  const [ttlPasien, setTtlPasien] = useState(initialData.ttl_pasien);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/datadehidrasi/${initialData.id}`, {
        nama_pasien: namaPasien,
        ttl_pasien: ttlPasien
      });
      onUpdateSuccess(); // Callback to update parent component state or handle success
    } catch (error) {
      console.error('Error updating data:', error);
      // Handle error as needed
    }
  };

  const handleNamaPasienChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNamaPasien(e.target.value);
  };

  const handleTtlPasienChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTtlPasien(e.target.value);
  };

  return (
    <>
      {/* Modal */}
      <div className="modal show" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark">Edit Data Pasien</h5>
              <a type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" href="/admin"></a>
            </div>
            <div className="modal-body text-dark">
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="namaPasien">Nama Pasien:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="namaPasien"
                    value={namaPasien}
                    onChange={handleNamaPasienChange}
                  />
                </div>
                <div className="form-group text-dark mt-3">
                  <label htmlFor="ttlPasien">Tempat Tanggal Lahir:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ttlPasien"
                    value={ttlPasien}
                    onChange={handleTtlPasienChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal backdrop */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default UpdateDataForm;
