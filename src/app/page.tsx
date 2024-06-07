"use client";
import Image from "next/image";
import StudentForm, { StudentData } from "@/components/StudentForm";
import StudentCard from "@/components/StudentCard";
import { useState } from "react";

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
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-center text-2xl font-bold mb-8">
        Generador de Credenciales Temporales
      </h1>
      <StudentForm onUpdate={handleFormUpdate} />
      <StudentCard student={student} />
    </div>
  );
}
