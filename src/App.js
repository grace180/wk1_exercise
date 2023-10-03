import anugrah from './anugrah.jpg';
import './App.css';
import React , {useState}from 'react';

function App() {
  const [ubahFoto, setUbahFoto] = useState(false);

  const tombolUbahFoto = () =>{
    setUbahFoto(!ubahFoto);
  }
  return (
    <div className="App">
      <header className="profile">
        <div className={`profile-image ${ubahFoto ? 'fotoLingkaran' : ''}`}>
          <img src={anugrah} className="profile-photo" alt="Foto Profil" />
          <h3>Perempuan</h3>
          <h3>Mahasiswa</h3>
        </div>
        <div className='profile-details'>
          <div className='name'>
            <h2>Anugrah Mariani Pirade`</h2>
          </div> 
          <div className='details'>
            <div className='detail-item'>
              <span className='detail-label'>Hobby :</span>
              <span className='detail-value'>Tidur</span>
            </div>
            <div className='detail-item'>
              <span className='detail-label'>Jurusan :</span>
              <span className='detail-value'>Informatika</span>
            </div>
            <div className='detail-item'>
              <span className='detail-label'>Jalur Sukses :</span>
              <span className='detail-value'>Corporate Enterpreneurship</span>
            </div>
            <div className='detail-item'>
              <span className='detail-label'>Angkatan 2022</span>
            </div>
          </div>
        </div>
      </header>
      <div className='pengalaman'>
        <h1>Riwayat Organisasi</h1>
            <div className='Informatika Student Union'>
              <h3>Student Union Informatika 2023</h3>
            </div>
          </div>
        </div>

  );
}
export default App;

