// components/StudentCard.tsx
import React from "react";
import StudentCardFront from "./StudentCardFront";
import StudentCardBack from "./StudentCardBack";
import { StudentData } from "./StudentForm";
import downloadPDF from "@/utils/exportPDF";

interface StudentCardProps {
  student: StudentData;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="flex flex-col items-center">
      <StudentCardFront student={student} />
      <StudentCardBack />
      {/* <button
        onClick={() => downloadPDF({ student })}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Descargar Credencial en PDF
      </button> */}
    </div>
  );
};

export default StudentCard;
