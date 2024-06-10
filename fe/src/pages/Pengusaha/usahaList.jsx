import React from "react";
import { Link } from "react-router-dom";
import rumahferi from '../../assets/rumahferi.jpg';

const UsahaList = () => {
  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      background: '#F2FAFD',
      position: 'relative'
    },
    usahaContainer: {
      width: '960px',
      height: '1384px',
      position: 'relative'
    },
    rectangle: {
      position: 'absolute',
      background: 'white',
      borderRadius: '10px',
      width: '900px',
      height: '800px',
      left: '30px',
      top: '100px'
    },
    tabelusaha: {
      position: 'absolute',
      width: '322px',
      height: '240px',
      left: '64px',
      top: '260px',
      display: 'flex',
      justifyContent: 'space-between'
    },
    tabelusaha2: {
      position: 'relative',
      width: '150px',
      height: '240px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    bodyusaha: {
      width: '100%',
      height: '100%',
      background: '#FFFFFF',
      borderRadius: '10px'
    },
    gambarusaha: {
      width: '100%',
      height: '110px',
      background: '#9BBBFC',
      borderRadius: '10px',
      background: `url(${rumahferi}) center/cover no-repeat`,
      position: 'absolute',
      top: 0
    },
    tomboldetail: {
      width: '130px',
      height: '24px',
      background: '#9BBBFC',
      borderRadius: '50px',
      position: 'absolute',
      bottom: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'white',
      fontSize: '14px',
      border: 'none',
      cursor: 'pointer',
      lineHeight: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    tomboltambah: {
      position: 'absolute',
      width: '235px',
      height: '40px',
      left: '370px',
      top: '550px',
      background: '#9BBBFC',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'white',
      fontSize: '14px'
    },
    buttonStyle: {
      fontSize: '14px',
      fontFamily: 'Inter, sans-serif',
      fontWeight: '400',
      lineHeight: '14px',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: '10px',
      textAlign: 'center'
    },
    aktifButton: {
      color: 'black'
    },
    loremButton: {
      color: 'gray'
    },
    usahaAndaTitle: {
      position: 'absolute',
      left: '64px',
      top: '140px',
      color: 'black',
      fontSize: '24px',
      fontFamily: 'Inter, sans-serif',
      fontWeight: '700',
      lineHeight: '24px'
    },
    buttonContainer: {
      position: 'absolute',
      width: '80px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    aktif: {
      left: '64px',
      top: '198px'
    },
    lorem: {
      left: '182px',
      top: '198px'
    },
    garistebal: {
      position: 'absolute',
      width: '56px',
      left: '74px',
      top: '230px',
      border: '3px solid black'
    },
    garis: {
      position: 'absolute',
      width: '900px',
      left: '30px',
      top: '230px',
      border: '1px solid #ABABAB'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.usahaContainer}>
        <div style={styles.rectangle} />
        <div style={styles.tabelusaha}>
          <div style={styles.tabelusaha2}>
            <div style={styles.bodyusaha}></div>
            <div style={styles.gambarusaha}></div>
            <button style={styles.tomboldetail}>Detail</button>
          </div>
          <div style={styles.tabelusaha2}>
            <div style={styles.bodyusaha}></div>
            <div style={styles.gambarusaha}></div>
            <button style={styles.tomboldetail}>Detail</button>
          </div>
        </div>
        <Link to="/tambah" style={styles.tomboltambah}>
          + Tambahkan
        </Link>
        <div style={styles.usahaAndaTitle}>Usaha anda</div>
        <div style={{ ...styles.buttonContainer, ...styles.aktif }}>
          <Link to="/usaha">
            <button style={{ ...styles.buttonStyle, ...styles.aktifButton }}>Aktif</button>
          </Link>
        </div>
        <div style={{ ...styles.buttonContainer, ...styles.lorem }}>
          <Link to="/lorem">
            <button style={{ ...styles.buttonStyle, ...styles.loremButton }}>Lorem</button>
          </Link>
        </div>
        <div style={styles.garis}></div>
        <div style={styles.garistebal}></div>
      </div>
    </div>
  );
};

export default UsahaList;
