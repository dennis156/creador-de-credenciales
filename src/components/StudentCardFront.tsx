import React from "react";
import { StudentData } from "./StudentForm";

interface StudentCardFrontProps {
  student: StudentData;
}

export default function StudentCardFront({ student }: StudentCardFrontProps) {
  const backgroundImageUrl =
    "https://res.cloudinary.com/dyhpbqaht/image/upload/v1717734408/Gafete_identificaci%C3%B3n_credencial_Biblioteca_Formal_Azul_dwc9c7.png";
  return (
    <div
      id="student-card-front"
      style={{
        border: "1px solid black",
        marginTop: "20px",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "85.6mm",
        height: "54mm",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ textAlign: "left", marginLeft: "60px" }}>
          <h1 style={{ margin: 0, fontSize: "14px" }}>
            CREDENCIAL DE ESTUDIANTE
          </h1>
          <p style={{ margin: 0, fontSize: "10px" }}>
            Nombre: {student.name || "______________"}
          </p>
          <p style={{ margin: 0, fontSize: "10px" }}>
            ID: {student.id || "______________"}
          </p>
          <p style={{ margin: 0, fontSize: "10px" }}>
            Programa: {student.program || "______________"}
          </p>
          <p style={{ margin: 0, fontSize: "10px" }}>
            Ciclo Escolar: {student.cycle || "______________"}
          </p>
          <p style={{ margin: 0, fontSize: "10px" }}>
            Vigencia: Diciembre 2024
          </p>
        </div>
      </div>
    </div>
  );
}
