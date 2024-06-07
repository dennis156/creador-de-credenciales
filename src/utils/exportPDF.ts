import * as htmlToImage from "html-to-image";
import { jsPDF } from "jspdf";
import { StudentData } from "@/components/StudentForm";

interface StudentCardProps {
  student: StudentData;
}

const downloadPDF = ({ student }: StudentCardProps) => {
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

export default downloadPDF;
