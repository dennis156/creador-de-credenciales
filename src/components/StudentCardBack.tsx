// components/StudentCardBack.tsx
import React from "react";

const StudentCardBack: React.FC = () => {
  return (
    <div
      id="student-card-back"
      style={{ border: "1px solid black", padding: "20px", marginTop: "20px" }}
    >
      <p>UNID CAMPUS ACAPULCO</p>
      <div style={{ height: "100px" }}></div> {/* Espacio para sello y firma */}
      <p>Lic. Reyna Isabel Frances Gomez</p>
      <p>Coordinadora de Servicios Escolares</p>
      <p>Vigencia: Diciembre 2024</p>
    </div>
  );
};

export default StudentCardBack;
