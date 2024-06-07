import React from "react";

const StudentCardBack: React.FC = () => {
  const backgroundImageUrl =
    "https://res.cloudinary.com/dyhpbqaht/image/upload/v1717734874/Gafete_identificaci%C3%B3n_credencial_Biblioteca_Formal_Azul_1_atjr8c.png";
  return (
    <div
      id="student-card-back"
      style={{
        border: "1px solid black",
        marginTop: "20px",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "85.6mm",
        height: "54mm",
        color: "black",
        padding: "10px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "10px", margin: 0 }}>UNID CAMPUS ACAPULCO</p>
      <div style={{ height: "80px" }}></div> {/* Espacio para sello y firma */}
      <p style={{ fontSize: "10px", margin: 0 }}>
        Lic. Reyna Isabel Frances Gomez
      </p>
      <p style={{ fontSize: "10px", margin: 0 }}>
        Coordinadora de Servicios Escolares
      </p>
      <p style={{ fontSize: "10px", margin: 0 }}>Vigencia: Diciembre 2024</p>
    </div>
  );
};

export default StudentCardBack;
