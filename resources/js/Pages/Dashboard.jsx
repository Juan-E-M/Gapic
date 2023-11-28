import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard(props) {
    const {auth} = props
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Inicio
                </h2>
            }
        >
            <Head title="Inicio" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-2">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className=" text-gray-900">
                            Bienvenido a la autoevaluación
                        </div>
                        <br/>
                        <Link
                            href={route("autosurvey.information", { user_id: auth.user.id })}
                            className={
                                `inline-flex items-center py-2 px-2 bg-gray-800 border border-transparent rounded-md font-semibold text-sm text-white tracking-widest hover:bg-gray-600 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150`
                            }
                        >
                            Información de la evaluación
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
