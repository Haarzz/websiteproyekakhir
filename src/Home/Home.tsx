import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
    <div className="justify-content-center mt-5">
        <header className="pt-5"></header>
        <main className="px-3 text-center">
          <h1>DEHYDRATION MONITORING</h1>
          <p className="lead">
            Cek Riwayat Tingkat Dehidrasi anda pada Alat Tingkat Dehidrasi yang
            dapat memonitor histori pengecekan riwayat dehidrasi anda dan dapat
            mencegah hal hal yang tidak diinginkan
          </p>
          <Link className="btn btn-secondary" to='/cekriwayat'> CEK DISINI</Link>
        </main>
        <footer></footer>
        </div>
    </>
  );
}
