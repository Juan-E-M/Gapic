import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link } from "@inertiajs/react";
import PdfReport from "./PdfReport";

export default function Information(props) {
    const { data: autosurveys, links } = usePage().props.autosurveys;
    const { auth, autosurveys_number } = props;

    const intervalOptions = [
        ['Ecelente', 'De 72 a 90','De 17 a 20', 'Puede formular y gestionar'],
        ['Sobresaliente', 'De 54 a 72','De 13 a 16', 'Puede tomar decisiones en equipo para formular y gestionar'],
        ['Notable', 'De 36 a 54','De 9 a 12', 'Puede acompañar a formular y gestionar'],
        ['Aprobado', 'De 18 a 36','De 5 a 8', 'Debe reforzar más sus conocimientos'],
        ['Desaprobado', 'De 1 a 18','De 0 a 4', 'No esta listo para formular ni gestionar'],
    ]

    function getClassName(active) {
        if (active) {
            return "mr-1 mb-1 px-2 py-2 text-sm leading-4 border rounded hover:bg-blue-200 hover:text-blue-700 focus:border-primary focus:text-primary bg-blue-700 text-white";
        } else {
            return "mr-1 mb-1 px-2 py-2 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

    function getIndex(score) {
        const index =
            (1 <= score && score < 18) ? 4 :
            (18 <= score && score < 36) ? 3 :
            (36 <= score && score < 54) ? 2 :
            (54 <= score && score < 72) ? 1 :
            (72 <= score && score < 90) ? 0 : null;
        return index
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Información de la autoevaluación
                </h2>
            }
        >
            <Head title="Info" />

            {autosurveys_number == 0 ? (
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-2">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                No hay encuestas realizadas
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="p-6 mt-12 max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-hidden rounded-lg shadow-md">
                    <table className="w-full shadow">
                        <thead>
                            <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                    N°
                                </th>
                                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 hidden sm:table-cell">
                                    Realizada
                                </th>
                                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                    Aciertos
                                </th>
                                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                    Intervalo de respuesta
                                </th>
                                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                    Vigesimal
                                </th>
                                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                    Más
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {autosurveys.map((autosurvey, i) => (
                                <tr
                                    key={autosurvey.id}
                                    className="text-gray-700"
                                >
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {i + 1}
                                        </p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm hidden sm:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {new Date(
                                                autosurvey.created_at
                                            ).toLocaleString("es-ES", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                                hour: "numeric",
                                                minute: "numeric",
                                                hour12: true,
                                            })}
                                        </p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm ">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {autosurvey.score}
                                        </p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm ">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {intervalOptions[getIndex(autosurvey.score)][1]}
                                        </p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm ">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                        {intervalOptions[getIndex(autosurvey.score)][2]}
                                        </p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                    <button
                                        onClick={()=>PdfReport(auth.user, autosurvey.score, getIndex(autosurvey.score))}
                                        className={
                                            `inline-flex items-center py-2 px-2 bg-green-800 border border-transparent rounded-md font-semibold text-sm text-white tracking-widest hover:bg-green-600 focus:outline-none focus:ring-2 transition ease-in-out duration-150`
                                        }
                                    >
                                        Imprimir
                                    </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex flex-wrap justify-end mt-4 text-sm">
                        {links.map((link, key) =>
                            link.url == null ? (
                                <div key={key} className="mr-1 mb-1 px-2 py-2 text-sm leading-4 text-gray-400 border rounded">
                                    {link.label == "Next &raquo;"
                                        ? ">>"
                                        : link.label == "&laquo; Previous"
                                        ? "<<"
                                        : link.label}
                                </div>
                            ) : (
                                <Link
                                    key={key}
                                    className={getClassName(link.active)}
                                    href={link.url}
                                >
                                    {link.label == "Next &raquo;"
                                        ? ">>"
                                        : link.label == "&laquo; Previous"
                                        ? "<<"
                                        : link.label}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
