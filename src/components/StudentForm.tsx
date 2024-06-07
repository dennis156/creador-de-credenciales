"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface StudentFormProps {
  onUpdate: (data: StudentData) => void;
  onDownloadPDF: () => void;
}

export interface StudentData {
  name: string;
  id: string;
  program: string;
  cycle: string;
}

export default function StudentForm({
  onUpdate,
  onDownloadPDF,
}: StudentFormProps) {
  const { register, watch, handleSubmit } = useForm<StudentData>();
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    const subscription = watch((value) => {
      const valid = value.name && value.id && value.program && value.cycle;
      setIsValid(!!valid);
      onUpdate(value);
    });
    return () => subscription.unsubscribe();
  }, [watch, onUpdate]);

  const onSubmit = () => {
    if (isValid) {
      onDownloadPDF();
    } else {
      alert("Por favor, ingrese todos los datos del formulario.");
    }
  };

  return (
    <form
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre:
        </label>
        <input
          id="name"
          {...register("name")}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="id" className="block text-sm font-medium text-gray-700">
          ID:
        </label>
        <input
          id="id"
          {...register("id")}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="program"
          className="block text-sm font-medium text-gray-700"
        >
          Programa:
        </label>
        <input
          id="program"
          {...register("program")}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="cycle"
          className="block text-sm font-medium text-gray-700"
        >
          Ciclo Escolar:
        </label>
        <input
          id="cycle"
          {...register("cycle")}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className={`mt-4 px-4 py-2 rounded ${
          isValid
            ? "bg-blue-500 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!isValid}
      >
        Descargar Credencial en PDF
      </button>
    </form>
  );
}
