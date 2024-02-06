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
                                    una autoevaluación con 90 preguntas para
                                    medir tus conocimientos. Te daremos una
                                    calificación hasta vigesimal basada en tus
                                    respuestas.
                                </p>
                            </div>
                        </div>
                    </div>

                    
                        
                        <div className="flex flex-col mb-8 px-24 justify-center">
                            <div className="">
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
                                    className="text-center px-24"
                                    style={{ color: "#1B224C" }}
                                >
                                    ¡Felicidades por unirte a GAPIC! La mejora
                                    personal está en tus manos. Decídete a
                                    aprender más y superarte a ti mismo. La
                                    vasta información en Internet es tu aliada
                                    para seguir creciendo.
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
        </AuthenticatedLayout>
    );
}
