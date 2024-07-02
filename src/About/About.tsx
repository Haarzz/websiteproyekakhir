import "./about.css";

export default function About() {
  return (
    <>
      <div className="container-fluid justify-content-center">
        <div className="fw-bold text-center">
          <h3>BIODATA</h3>
        </div>
        <div className="text-center">
          <img
            src="https://i.ibb.co.com/X2rQVvY/FOTO-FORMAL.jpg"
            className="rounded-image mt-4"
          />
          <h4 className="fw-bold pt-3">MUCHAMMAD HASBI QOIS PUTRA ALFAHMI</h4>
          <p className="fw-bold pt-2">Teknik Elektronika - PENS</p>
          <p className="fw-bold">3D3 ELEKTRONIKA B - 2121500042</p>
          <h5 className="fw-bold">Judul Tugas Akhir</h5>
          <p className="fw-bold ">
            RANCANG BANGUN SISTEM PENDETEKSI TINGKAT DEHIDRASI DENGAN
            MENGGUNAKAN METODE FUZZY LOGIC BERBASIS IOT
          </p>
        </div>
      </div>
    </>
  );
}
