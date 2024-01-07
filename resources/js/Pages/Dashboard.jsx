import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard(props) {
    const { auth } = props;
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Inicio" />

            <div className="pt-2">
                <div className="max-w-7xl mx-auto sm:px-6 px-3 lg:px-8 py-4">
                    <p className="mb-12" style={{ color: "#1B224C" }}>
                        Bienvenido al Proyecto GAPIC, una iniciativa que busca
                        fortalecer el conocimiento en la gestión administrativa
                        de proyectos de investigación financiados con canon y
                        sobre canon.
                    </p>
                    <img
                        className="max-w-full h-auto mb-12 rounded-lg"
                        src="/images/Imagen_inicio.jpg"
                        alt="gapic logo"
                    />
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg p-6 mb-12">
                        <div className=" text-gray-900">
                            Bienvenido a la autoevaluación
                        </div>
                        <br />
                        <Link
                            href={route("autosurvey.information", {
                                user_id: auth.user.id,
                            })}
                            className={`inline-flex items-center py-2 px-2 bg-gray-800 border border-transparent rounded-md font-semibold text-sm text-white tracking-widest hover:bg-gray-600 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150`}
                        >
                            Información de la evaluación
                        </Link>
                    </div>

                    <div className="flex gap-11 mb-12">
                        <div className="w-1/2">
                            <div className="flex justify-center">
                                <h6
                                    className="w-72 text-center p-2 rounded-md"
                                    style={{
                                        backgroundColor: "#1B224C",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Explora GAPIC
                                </h6>
                            </div>
                            <br />
                            <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3">
                                <p>
                                    Sumérgete en una experiencia que abarca lo
                                    técnico y lo financiero. Con recursos
                                    educativos y autoevaluaciones, nuestro
                                    objetivo es proporcionarte una comprensión
                                    integral de la gestión de proyectos.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex justify-center">
                                <h6
                                    className="w-72 text-center p-2 rounded-md"
                                    style={{
                                        backgroundColor: "#1B224C",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    ¿Cómo Participar?
                                </h6>
                            </div>
                            <br />
                            <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3">
                                <p>
                                    Participar en GAPIC es sencillo. Regístrate,
                                    accede a libros clave de gestión y realiza
                                    una autoevaluación con 101 preguntas para
                                    medir tus conocimientos. Te daremos una
                                    calificación hasta vigesimal basada en tus
                                    respuestas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-11 mb-12">
                        <div className="w-1/2">
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
                                className="w-full border border-collapse text-center "
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
                                            Rango de Puntaje
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td
                                            className="p-5  border-2"
                                            style={{ borderColor: "#1B224C" }}
                                        >
                                            Pésimo
                                        </td>
                                        <td
                                            className="p-5  border-2"
                                            style={{ borderColor: "#1B224C" }}
                                        >
                                            0 - 15
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            className="p-5  border-2"
                                            style={{ borderColor: "#1B224C" }}
                                        >
                                            Muy Malo
                                        </td>
                                        <td
                                            className="p-5  border-2"
                                            style={{ borderColor: "#1B224C" }}
                                        >
                                            16 - 30
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            className="p-5  border-2"
                                            style={{ borderColor: "#1B224C" }}
                                        >
                                            Malo
                                        </td>
                                        <td
                                            className="p-5  border-2"
                                            style={{ borderColor: "#1B224C" }}
                                        >
                                            31 - 45
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            className="p-5  border-2"
                                            style={{ borderColor: "#1B224C" }}
                                        >
                                            Regular
                                        </td>
                                        <td
                                            className="p-5  border-2"
                                            style={{ borderColor: "#1B224C" }}
                                        >
                                            46 - 60
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            className="p-5  border-2"
                                            style={{ borderColor: "#1B224C" }}
                                        >
                                            Bueno
                                        </td>
                                        <td
                                            className="p-5  border-2"
                                            style={{ borderColor: "#1B224C" }}
                                        >
                                            61 - 75
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            className="p-5  border-2"
                                            style={{ borderColor: "#1B224C" }}
                                        >
                                            Muy Bueno
                                        </td>
                                        <td
                                            className="p-5  border-2"
                                            style={{ borderColor: "#1B224C" }}
                                        >
                                            76 - 90
                                        </td>
                                    </tr>
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
                                            91 - 101
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-center">
                            <div className="flex justify-center">
                                <img
                                    className="mx-auto mb-4 max-w-full h-auto"
                                    src="/images/ICONO.png"
                                    alt="icono"
                                    style={{
                                        maxWidth: "120px",
                                        height: "auto",
                                    }}
                                />
                            </div>
                            <div className="text-center">
                                <p
                                    className="text-center"
                                    style={{ color: "#1B224C" }}
                                >
                                    Participar en GAPIC es sencillo. Regístrate,
                                    accede a libros clave de gestión y realiza
                                    una autoevaluación con 101 preguntas para
                                    medir tus conocimientos. Te daremos una
                                    calificación hasta vigesimal basada en tus
                                    respuestas.
                                </p>
                                <br />
                                <Link
                                    href={route("autosurvey.information", {
                                        user_id: auth.user.id,
                                    })}
                                    className={`inline-flex items-center py-2 px-2 bg-gray-800 border border-transparent rounded-md font-semibold text-sm text-white tracking-widest hover:bg-gray-600 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150`}
                                >
                                    Información de la evaluación
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
