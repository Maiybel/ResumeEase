// src/utils/pdfExport.js
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = async (elementId) => {
  try {
    const input = document.getElementById(elementId);
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  } catch (error) {
    console.error("PDF generation failed:", error);
  }
};
