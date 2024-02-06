import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Description(props) {
    const { auth } = props;
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Inicio" />
            <br />
            <br />
            <div className="flex justify-center">
                <h6
                    className="w-72 text-center p-2 rounded-md"
                    style={{
                        backgroundColor: "#1B224C",
                        color: "#FFFFFF",
                    }}
                >
                    Información de la autoevaluación
                </h6>
            </div>
            <br />

            <table
                className="w-md mx-auto border border-collapse text-center "
                style={{ backgroundColor: "#f6f4f3" }}
            >
                <thead>
                    <tr>
                        <th
                            className="p-5 font-bold  border-2 text-gray-700"
                            style={{ borderColor: "#1B224C" }}
                        >
                            Calificación
                        </th>
                        <th
                            className="p-5 font-bold  border-2 text-gray-700"
                            style={{ borderColor: "#1B224C" }}
                        >
                            Intervalo de respuesta
                        </th>
                        <th
                            className="p-5 font-bold  border-2 text-gray-700"
                            style={{ borderColor: "#1B224C" }}
                        >
                            Vigesimal
                        </th>
                        <th
                            className="p-5 font-bold  border-2 text-gray-700"
                            style={{ borderColor: "#1B224C" }}
                        >
                            Interpretación
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            Excelente
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            De 73 a 90
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            De 17 a 20
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            Puede formular y gestionar.
                        </td>
                    </tr>
                    <tr>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            Sobresaliente
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            De 55 a 72
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            De 13 a 16
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            Puede tomar decisiones en equipo para formular y
                            gestionar.
                        </td>
                    </tr>
                    <tr>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            Notable
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            De 37 a 54
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            De 9 a 12
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            Puede acompañar a formular y gestionar.
                        </td>
                    </tr>
                    <tr>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            Aprobado
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            De 19 a 36
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            De 5 a 8
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            Debe reforzar más sus conocimientos
                        </td>
                    </tr>
                    <tr>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            Desaprobado
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            De 1 a 18
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            De 0 a 4
                        </td>
                        <td
                            className="p-5  border-2"
                            style={{ borderColor: "#1B224C" }}
                        >
                            No está listo para formular ni gestionar.
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <br />
        </AuthenticatedLayout>
    );
}
