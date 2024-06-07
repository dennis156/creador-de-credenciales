import React from "react";
import { StudentData } from "./StudentForm";

interface StudentCardFrontProps {
  student: StudentData;
}

export default function StudentCardFront({ student }: StudentCardFrontProps) {
  return (
    <div
      id="student-card-front"
      style={{ border: "1px solid black", padding: "20px", marginTop: "20px" }}
    >
      <h1>UNID CREDENCIAL DE ESTUDIANTE</h1>
      <p>Nombre: {student.name || "______________"}</p>
      <p>ID: {student.id || "______________"}</p>
      <p>Programa: {student.program || "______________"}</p>
      <p>Ciclo Escolar: {student.cycle || "______________"}</p>
      <p>Vigencia: Diciembre 2024</p>
    </div>
  );
}
