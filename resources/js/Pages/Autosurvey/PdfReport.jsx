import {jsPDF} from "jspdf"
import autoTable from 'jspdf-autotable'

export default function PdfReport (user, score, index) {
    const doc = new jsPDF();
    const columns = ['CALIFICACIÓN','INTERVALO DE RESPUESTA', 'VIGESIMAL', 'INTERPRETACIÓN']
    const data = [
        ['Ecelente', 'De 72 a 90','De 17 a 20', 'Puede formular y gestionar'],
        ['Sobresaliente', 'De 54 a 72','De 13 a 16', 'Puede tomar decisiones en equipo para formular y gestionar'],
        ['Notable', 'De 36 a 54','De 9 a 12', 'Puede acompañar a formular y gestionar'],
        ['Aprobado', 'De 18 a 36','De 5 a 8', 'Debe reforzar más sus conocimientos'],
        ['Desaprobado', 'De 1 a 18','De 9 a 4', 'No esta listo para formular ni gestionar'],
    ]

    doc.text('Resultados de Autoevaluación', 70,20);
    doc.setFontSize(10);
    doc.text(`Nombre: ${user.name}`, 13, 40)
    doc.text(`Apellidos: ${user.lastname}`, 13, 50)
    doc.text(`Aciertos: ${score}`, 13, 60)

    

    doc.autoTable({
        startY: 70,
        head: [columns],
        body: [data[index]],
        theme: 'plain',
        headStyles: {
            halign: 'center',
            lineWidth: 0.5,
            lineColor: "#1B224C",  // Cambia este arreglo RGB según tu preferencia de color
        },
        bodyStyles: {
            lineWidth: 0.5,
            lineColor: "#1B224C",  // Cambia este arreglo RGB según tu preferencia de color
        }
    });
    
    doc.save('reporte.pdf')
} 