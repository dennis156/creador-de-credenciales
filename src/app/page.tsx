"use client";
import StudentForm, { StudentData } from "@/components/StudentForm";
import StudentCard from "@/components/StudentCard";
import { useState } from "react";
import downloadPDF from "@/utils/exportPDF";

export default function Home() {
  const [student, setStudent] = useState<StudentData>({
    name: "",
    id: "",
    program: "",
    cycle: "",
  });

  const handleFormUpdate = (data: StudentData) => {
    setStudent(data);
  };

  const handleDownloadPDF = () => {
    downloadPDF({ student });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      <h1 className="text-center text-2xl font-bold mb-8">
        Generador de Credenciales Temporales
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start w-full px-4 md:px-10 gap-8">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <StudentForm
            onUpdate={handleFormUpdate}
            onDownloadPDF={handleDownloadPDF}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center">
          <StudentCard student={student} />
        </div>
      </div>
    </div>
  );
}
