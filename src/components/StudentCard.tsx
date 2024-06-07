// components/StudentCard.tsx
import React from "react";
import * as htmlToImage from "html-to-image";
import { jsPDF } from "jspdf";
import StudentCardFront from "./StudentCardFront";
import StudentCardBack from "./StudentCardBack";
import { StudentData } from "./StudentForm";

interface StudentCardProps {
  student: StudentData;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  const downloadPDF = () => {
    const cardFront = document.getElementById("student-card-front");
    const cardBack = document.getElementById("student-card-back");

    if (cardFront && cardBack) {
      const pdf = new jsPDF();

      htmlToImage
        .toPng(cardFront)
        .then((dataUrlFront) => {
          pdf.addImage(dataUrlFront, "PNG", 0, 0);
          return htmlToImage.toPng(cardBack);
        })
        .then((dataUrlBack) => {
          pdf.addPage();
          pdf.addImage(dataUrlBack, "PNG", 0, 0);
          const fileName = student.name
            ? `${student.name.replace(/\s+/g, "_")}_credencial.pdf`
            : "credencial.pdf";
          pdf.save(fileName);
        })
        .catch((error) => {
          console.error("Error generating PDF:", error);
        });
    }
  };

  return (
    <div>
      <StudentCardFront student={student} />
      <StudentCardBack />
      <button
        onClick={downloadPDF}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Descargar Credencial en PDF
      </button>
    </div>
  );
};

export default StudentCard;
