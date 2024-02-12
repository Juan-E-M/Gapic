import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Question = ({ question, i, handleInputChange }) => {
    return (
        <div
            className={`bg-white p-2 rounded shadow-md flex items-center justify-between cursor-pointer gap-3`}
        >
            <div className="block text-sm font-bold text-gray-700">
                {i + 1}. {question.description}
            </div>
            <select
                title="Por favor, selecciona una opción"
                className="appearance-none bg-white border border-gray-400 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                name={question.id}
                onChange={handleInputChange}
            >
                <option value="">---</option>
                <option value="1">V</option>
                <option value="0">F</option>
            </select>
        </div>
    );
};

const generateInitialAnswersState = () => {
    const initialAnswers = {};
    for (let i = 1; i <= 90; i++) {
        initialAnswers[i] = null;
    }
    return initialAnswers;
};

export default function Autosurvey(props) {
    const { auth, questions } = props;
    const [shuffledQuestions, setShuffledQuestions] = useState([]);

    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: auth.user.id,
        answers: generateInitialAnswersState(),
    });

    const handleInputChange = (e) => {
        let id = e.target.name
        let value = e.target.value
        data.answers = {...data.answers, [id]:value}
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("autosurvey.store"), {
            onSuccess: () => {
                return Swal.fire({
                    title: "Éxito",
                    text: "Autoevaluación completada",
                    icon: "success",
                });
            },
        });
    };

    useEffect(() => {
        const shuffleQuestions = () => {
            const shuffled = [...questions].sort(() => Math.random() - 0.5);
            setShuffledQuestions(shuffled);
        };
        shuffleQuestions();
    }, []);

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Autoevaluación" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-3 bg-opacity-50">
                        <h4>Marca solo las verdaderas</h4>
                        <br />
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-1 gap-1">
                                {shuffledQuestions.map((question, i) => (
                                    <Question
                                        key={i}
                                        question={question}
                                        i={i}
                                        handleInputChange={handleInputChange}
                                    />
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <button className="mt-8 bg-indigo-500 text-sm text-white py-2 px-4 rounded hover:bg-indigo-700">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
